import { ANTLRInputStream, CommonTokenStream, Token } from 'antlr4ts';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';

// Import generated ANTLR4 files
import { SnowflakeParser } from './parser/snowflake/SnowflakeParser';
import { CaseInsensitiveSnowflakeLexer } from './CaseInsensitiveSnowflakeLexer';

export interface ParseError {
  startLine: number;
  endLine: number;
  startColumn: number;
  endColumn: number;
  message: string;
}

export class SnowflakeSQL {
  private lexer: CaseInsensitiveSnowflakeLexer | null = null;
  private parser: SnowflakeParser | null = null;

  // Cache for normalized SQL to avoid repeated processing
  private static sqlCache = new Map<string, string>();
  private static readonly CACHE_SIZE_LIMIT = 1000;

  // Performance tracking
  private static parseTimes: number[] = [];

  constructor() {}

  /**
   * Normalize SQL input to handle case-insensitive keywords
   * Only converts completely lowercase keywords to uppercase, leaves mixed case unchanged
   * Optimized with single regex and Map lookup for better performance
   */
  private normalizeSQL(sql: string): string {
    // Check cache first
    if (SnowflakeSQL.sqlCache.has(sql)) {
      return SnowflakeSQL.sqlCache.get(sql)!;
    }

    // Use a single optimized regex with word boundaries for all keywords
    const keywordRegex =
      /\b(select|from|where|insert|update|delete|create|drop|alter|as|and|or|into|values|set|join|left|right|inner|outer|on|group|by|order|having|limit|offset|union|all|distinct|count|sum|avg|case|when|then|else|end|is|null|not|like|in|between|exists|cast|current_date|current_time|current_timestamp|true|false|table|if|exists)\b/g;

    const normalizedSQL = sql.replace(keywordRegex, (match) => {
      // Only convert to uppercase if the entire match is lowercase
      return match === match.toLowerCase() ? match.toUpperCase() : match;
    });

    // Cache the result (with size limit to prevent memory issues)
    if (SnowflakeSQL.sqlCache.size < SnowflakeSQL.CACHE_SIZE_LIMIT) {
      SnowflakeSQL.sqlCache.set(sql, normalizedSQL);
    }

    return normalizedSQL;
  }

  /**
   * Parse SQL and return any syntax errors
   */
  public parse(sql: string): { errors: ParseError[] } {
    const startTime = performance.now();
    // Normalize the SQL to handle case-insensitive keywords
    const normalizedSQL = this.normalizeSQL(sql);

    const inputStream = new ANTLRInputStream(normalizedSQL);
    this.lexer = new CaseInsensitiveSnowflakeLexer(inputStream);
    const tokenStream = new CommonTokenStream(this.lexer);
    this.parser = new SnowflakeParser(tokenStream);

    const errors: ParseError[] = [];

    // Remove default error listeners and add custom one
    this.parser.removeErrorListeners();
    this.parser.addErrorListener({
      syntaxError: (recognizer, offendingSymbol, line, charPositionInLine, msg, e) => {
        errors.push({
          startLine: line,
          endLine: line,
          startColumn: charPositionInLine,
          endColumn: charPositionInLine + (offendingSymbol?.text?.length || 1),
          message: msg
        });
      }
    });

    try {
      // Use the correct entry point for the Snowflake grammar
      this.parser.snowflake_file();
    } catch (error) {
      // Handle any parsing exceptions
      if (error instanceof Error) {
        errors.push({
          startLine: 1,
          endLine: 1,
          startColumn: 0,
          endColumn: 1,
          message: `Parsing error: ${error.message}`
        });
      } else {
        // Handle non-Error exceptions (strings, numbers, etc.)
        errors.push({
          startLine: 1,
          endLine: 1,
          startColumn: 0,
          endColumn: 1,
          message: `Parsing error: ${String(error)}`
        });
      }
    }
    const endTime = performance.now();
    SnowflakeSQL.parseTimes.push(endTime - startTime);

    return { errors };
  }

  /**
   * Get the parse tree for further analysis
   */
  public getParseTree(sql: string): ParserRuleContext | null {
    try {
      // Normalize the SQL to handle case-insensitive keywords
      const normalizedSQL = this.normalizeSQL(sql);

      const inputStream = new ANTLRInputStream(normalizedSQL);
      const lexer = new CaseInsensitiveSnowflakeLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new SnowflakeParser(tokenStream);

      // Suppress default console error listeners to avoid noisy logs during parsing
      parser.removeErrorListeners();

      // Use the correct entry point for the Snowflake grammar
      return parser.snowflake_file();
    } catch (error) {
      // Swallow and return null; callers will translate to a friendly error
      return null;
    }
  }

  /**
   * Get tokens from the SQL input
   */
  public getTokens(sql: string): Token[] {
    try {
      // Normalize the SQL to handle case-insensitive keywords
      const normalizedSQL = this.normalizeSQL(sql);

      const inputStream = new ANTLRInputStream(normalizedSQL);
      const lexer = new CaseInsensitiveSnowflakeLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      return tokenStream.getTokens();
    } catch (error) {
      // Swallow and return empty array to avoid console noise in tests/consumers
      return [];
    }
  }

  /**
   * Validate SQL and return any errors
   */
  public validate(sql: string): ParseError[] {
    return this.parse(sql).errors;
  }

  /**
   * Check if SQL is valid
   */
  public isValid(sql: string): boolean {
    const result = this.parse(sql);
    return result.errors.length === 0;
  }

  /**
   * Clear the SQL normalization cache to free memory
   */
  public static clearCache(): void {
    SnowflakeSQL.sqlCache.clear();
  }

  /**
   * Get cache statistics for monitoring
   */
  public static getCacheStats(): { size: number; limit: number } {
    return {
      size: SnowflakeSQL.sqlCache.size,
      limit: SnowflakeSQL.CACHE_SIZE_LIMIT
    };
  }

  /**
   * Get performance statistics
   */
  public static getPerformanceStats(): {
    averageParseTime: number;
    totalParses: number;
    cacheHitRate: number;
  } {
    const avgTime =
      SnowflakeSQL.parseTimes.length > 0
        ? SnowflakeSQL.parseTimes.reduce((a, b) => a + b, 0) / SnowflakeSQL.parseTimes.length
        : 0;

    return {
      averageParseTime: avgTime,
      totalParses: SnowflakeSQL.parseTimes.length,
      cacheHitRate: 0 // TODO: Implement cache hit rate calculation
    };
  }

  /**
   * Clear performance statistics
   */
  public static clearPerformanceStats(): void {
    SnowflakeSQL.parseTimes = [];
  }
}
