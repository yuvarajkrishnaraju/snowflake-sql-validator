import { SnowflakeSQL, ParseError } from './SnowflakeSQL';
import { SnowflakeValidationVisitor, ValidationError } from './SnowflakeValidationVisitor';

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export type { ParseError } from './SnowflakeSQL';
export type { ValidationError } from './SnowflakeValidationVisitor';
export { SnowflakeSQL } from './SnowflakeSQL';

/**
 * Validates a Snowflake SQL query.
 * @param sql The Snowflake SQL query string to validate.
 * @returns A ValidationResult object indicating validity and any errors found.
 */
export function validateSnowflakeSQL(sql: string): ValidationResult {
  const snowflakeParser = new SnowflakeSQL();

  // Step 1: Get initial syntax errors from ANTLR parsing
  const parseErrors = snowflakeParser.validate(sql);

  if (parseErrors.length > 0) {
    return {
      isValid: false,
      errors: parseErrors.map((err) => ({
        line: err.startLine,
        column: err.startColumn,
        message: err.message
      }))
    };
  }

  // Step 2: If no initial parse errors, proceed with custom AST-based validation
  const tree = snowflakeParser.getParseTree(sql);
  if (!tree) {
    return {
      isValid: false,
      errors: [
        {
          line: 1,
          column: 1,
          message: 'Failed to generate parse tree'
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
