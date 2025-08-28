import { ANTLRInputStream, CommonTokenStream, Token } from 'antlr4ts';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';

// Import generated ANTLR4 files
import { SnowflakeLexer } from './parser/snowflake/SnowflakeLexer';
import { SnowflakeParser } from './parser/snowflake/SnowflakeParser';

export interface ParseError {
  startLine: number;
  endLine: number;
  startColumn: number;
  endColumn: number;
  message: string;
}

export class SnowflakeSQL {
  private lexer: SnowflakeLexer | null = null;
  private parser: SnowflakeParser | null = null;

  constructor() {}

  /**
   * Parse SQL and return any syntax errors
   */
  public parse(sql: string): { errors: ParseError[] } {
    const inputStream = new ANTLRInputStream(sql);
    this.lexer = new SnowflakeLexer(inputStream);
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

    return { errors };
  }

  /**
   * Get the parse tree for further analysis
   */
  public getParseTree(sql: string): ParserRuleContext | null {
    try {
      const inputStream = new ANTLRInputStream(sql);
      const lexer = new SnowflakeLexer(inputStream);
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
      const inputStream = new ANTLRInputStream(sql);
      const lexer = new SnowflakeLexer(inputStream);
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
}
