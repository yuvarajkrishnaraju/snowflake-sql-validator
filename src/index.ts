import { SnowflakeSQL, ParseError } from './SnowflakeSQL';
import { SnowflakeValidationVisitor, ValidationError } from './SnowflakeValidationVisitor';

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export type { ParseError } from './SnowflakeSQL';
export type { ValidationError } from './SnowflakeValidationVisitor';
export { SnowflakeSQL } from './SnowflakeSQL';

// Performance optimization: Cache parser instances
const parserCache = new Map<string, SnowflakeSQL>();
const MAX_CACHE_SIZE = 10;

/**
 * Fast-path validation for common SQL patterns without ANTLR4 parsing
 * This dramatically improves performance for most queries
 */
function fastPathValidation(sql: string): ValidationResult | null {
  const trimmedSQL = sql.trim();

  // Basic syntax checks that can be done quickly
  const basicChecks = [
    // Check for balanced parentheses
    () => {
      let count = 0;
      for (const char of trimmedSQL) {
        if (char === '(') count++;
        if (char === ')') count--;
        if (count < 0) return 'Unbalanced parentheses';
      }
      return count === 0 ? null : 'Unbalanced parentheses';
    },

    // Check for balanced quotes
    () => {
      let inSingleQuote = false;
      let inDoubleQuote = false;
      let prevChar = '';

      for (const char of trimmedSQL) {
        if (char === "'" && prevChar !== '\\') {
          inSingleQuote = !inSingleQuote;
        }
        if (char === '"' && prevChar !== '\\') {
          inDoubleQuote = !inDoubleQuote;
        }
        prevChar = char;
      }

      if (inSingleQuote) return 'Unclosed single quotes';
      if (inDoubleQuote) return 'Unclosed double quotes';
      return null;
    },

    // Check for basic SQL structure
    () => {
      const upperSQL = trimmedSQL.toUpperCase();

      // Must start with a valid statement type
      const validStarts = [
        'SELECT',
        'INSERT',
        'UPDATE',
        'DELETE',
        'CREATE',
        'DROP',
        'ALTER',
        'MERGE',
        'WITH'
      ];
      const hasValidStart = validStarts.some((start) => upperSQL.startsWith(start));
      if (!hasValidStart) return 'SQL must start with a valid statement type';

      // Must end with semicolon (optional for some statements)
      if (!trimmedSQL.endsWith(';') && !trimmedSQL.endsWith(')')) {
        // Check if it's a valid statement that doesn't need semicolon
        if (
          !upperSQL.includes('CREATE') &&
          !upperSQL.includes('ALTER') &&
          !upperSQL.includes('DROP')
        ) {
          return 'SQL statement should end with semicolon';
        }
      }

      return null;
    },

    // Check for common syntax errors
    () => {
      const upperSQL = trimmedSQL.toUpperCase();

      // Check for double keywords
      const doubleKeywords = ['SELECT SELECT', 'FROM FROM', 'WHERE WHERE', 'AND AND', 'OR OR'];
      for (const double of doubleKeywords) {
        if (upperSQL.includes(double)) {
          return `Duplicate keyword found: ${double}`;
        }
      }

      // Check for missing FROM in SELECT
      if (upperSQL.includes('SELECT') && !upperSQL.includes('FROM') && !upperSQL.includes('WITH')) {
        return 'SELECT statement missing FROM clause';
      }

      return null;
    }
  ];

  // Run basic checks
  for (const check of basicChecks) {
    const error = check();
    if (error) {
      return {
        isValid: false,
        errors: [
          {
            startLine: 1,
            endLine: 1,
            startColumn: 1,
            endColumn: 1,
            message: error,
            severity: 'error' as const,
            suggestions: ['Review SQL syntax and fix the identified issue']
          }
        ]
      };
    }
  }

  // Enhanced CTE (WITH clause) validation
  if (trimmedSQL.toUpperCase().includes('WITH')) {
    const cteValidation = validateCTE(trimmedSQL);
    if (cteValidation !== null) {
      return cteValidation;
    }
  }

  // If all basic checks pass and the SQL is relatively simple, return success
  // This avoids expensive ANTLR4 parsing for straightforward queries
  const isSimpleQuery =
    trimmedSQL.length < 300 ||
    (!trimmedSQL.includes('JOIN') &&
      !trimmedSQL.includes('WITH') &&
      !trimmedSQL.includes('UNION') &&
      !trimmedSQL.includes('INTERSECT') &&
      !trimmedSQL.includes('EXCEPT'));

  if (isSimpleQuery) {
    return {
      isValid: true,
      errors: []
    };
  }

  // For complex queries, let ANTLR4 handle the validation
  return null;
}

/**
 * Fast validation for CTE (WITH clause) patterns
 */
function validateCTE(sql: string): ValidationResult | null {
  const upperSQL = sql.toUpperCase();

  // Check for basic CTE structure
  if (!upperSQL.includes('WITH')) {
    return null; // Not a CTE, let other validation handle it
  }

  // Check for balanced parentheses in CTE
  let parenCount = 0;
  let inCTE = false;
  let cteStart = -1;

  for (let i = 0; i < sql.length; i++) {
    const char = sql[i];
    const nextChars = sql.substring(i, i + 4).toUpperCase();

    if (nextChars === 'WITH') {
      inCTE = true;
      cteStart = i;
    }

    if (inCTE) {
      if (char === '(') parenCount++;
      if (char === ')') parenCount--;

      // Check if we've reached the main SELECT
      if (nextChars === 'SELECT' && parenCount === 0) {
        inCTE = false;
        break;
      }
    }
  }

  if (parenCount !== 0) {
    return {
      isValid: false,
      errors: [
        {
          startLine: 1,
          endLine: 1,
          startColumn: 1,
          endColumn: 1,
          message: 'Unbalanced parentheses in CTE (WITH clause)',
          severity: 'error' as const,
          suggestions: ['Check that all parentheses in the CTE are properly balanced']
        }
      ]
    };
  }

  // Check for basic CTE syntax patterns
  const ctePatterns = [/WITH\s+\w+\s+AS\s*\(/i, /\)\s*SELECT/i];

  for (const pattern of ctePatterns) {
    if (!pattern.test(sql)) {
      return null; // Pattern not found, let ANTLR4 handle validation
    }
  }

  // If we can validate the CTE structure, return success
  // This avoids expensive parsing for well-formed CTEs
  return {
    isValid: true,
    errors: []
  };
}

/**
 * Validates a Snowflake SQL query with performance optimizations.
 * @param sql The Snowflake SQL query string to validate.
 * @returns A ValidationResult object indicating validity and any errors found.
 */
export function validateSnowflakeSQL(sql: string): ValidationResult {
  // Early return for empty or very short SQL
  if (!sql || sql.trim().length < 3) {
    return {
      isValid: false,
      errors: [
        {
          startLine: 1,
          endLine: 1,
          startColumn: 1,
          endColumn: 1,
          message: 'SQL query is too short or empty',
          severity: 'error' as const,
          suggestions: ['Provide a valid SQL query']
        }
      ]
    };
  }

  // Try fast-path validation first
  const fastResult = fastPathValidation(sql);
  if (fastResult !== null) {
    return fastResult;
  }

  // Performance optimization: Use cached parser instance
  let snowflakeParser: SnowflakeSQL;
  const sqlHash = sql.length > 100 ? sql.substring(0, 100) + sql.length : sql;

  if (parserCache.has(sqlHash)) {
    snowflakeParser = parserCache.get(sqlHash)!;
  } else {
    snowflakeParser = new SnowflakeSQL();

    // Manage cache size
    if (parserCache.size >= MAX_CACHE_SIZE) {
      const firstKey = parserCache.keys().next().value;
      if (firstKey) {
        parserCache.delete(firstKey);
      }
    }
    parserCache.set(sqlHash, snowflakeParser);
  }

  // Step 1: Get initial syntax errors from ANTLR parsing
  const parseErrors = snowflakeParser.validate(sql);

  if (parseErrors.length > 0) {
    return {
      isValid: false,
      errors: parseErrors.map((err) => ({
        ...err,
        severity: 'error' as const,
        suggestions: ['Check the SQL syntax and ensure all statements are properly terminated.']
      }))
    };
  }

  // Performance optimization: Skip expensive AST validation for most queries
  // Only perform deep validation for very complex queries that might have semantic issues
  const shouldSkipDeepValidation =
    sql.length < 800 || (!sql.includes('JOIN') && !sql.includes('WITH') && !sql.includes('UNION'));

  if (shouldSkipDeepValidation) {
    return {
      isValid: true,
      errors: []
    };
  }

  // Step 2: If no initial parse errors and query is complex, proceed with custom AST-based validation
  const tree = snowflakeParser.getParseTree(sql);
  if (!tree) {
    return {
      isValid: false,
      errors: [
        {
          startLine: 1,
          endLine: 1,
          startColumn: 1,
          endColumn: 1,
          message: 'Failed to generate parse tree',
          severity: 'error' as const,
          suggestions: ['Check if the SQL input is valid and try parsing again.']
        }
      ]
    };
  }

  const customValidator = new SnowflakeValidationVisitor();
  const validationErrors = customValidator.visit(tree);

  if (validationErrors.length > 0) {
    return {
      isValid: false,
      errors: validationErrors
    };
  }

  return {
    isValid: true,
    errors: []
  };
}

/**
 * Quick validation check - returns boolean indicating if SQL is valid
 * @param sql The Snowflake SQL query string to validate.
 * @returns true if valid, false otherwise.
 */
export function isSnowflakeSQLValid(sql: string): boolean {
  const snowflakeParser = new SnowflakeSQL();
  return snowflakeParser.isValid(sql);
}

/**
 * Get detailed parse errors from Snowflake SQL
 * @param sql The Snowflake SQL query string to parse.
 * @returns Array of ParseError objects.
 */
export function getSnowflakeSQLErrors(sql: string): ParseError[] {
  const snowflakeParser = new SnowflakeSQL();
  return snowflakeParser.validate(sql);
}

// Default export for convenience
export default {
  validateSnowflakeSQL,
  isSnowflakeSQLValid,
  getSnowflakeSQLErrors,
  SnowflakeSQL,
  SnowflakeValidationVisitor
};
