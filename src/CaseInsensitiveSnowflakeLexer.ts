import { CharStream, Lexer, Token } from 'antlr4ts';
import { SnowflakeLexer } from './parser/snowflake/SnowflakeLexer';

/**
 * Case-insensitive wrapper for SnowflakeLexer that handles lowercase SQL keywords
 */
export class CaseInsensitiveSnowflakeLexer extends SnowflakeLexer {
  constructor(input: CharStream) {
    super(input);
  }

  /**
   * Override the nextToken method to handle case-insensitive matching
   */
  public nextToken(): Token {
    const token = super.nextToken();

    // If it's an identifier, check if it matches any SQL keywords (case-insensitive)
    if (token.type === SnowflakeLexer.ID) {
      const text = token.text?.toUpperCase();

      // Map common SQL keywords to their token types (only those that exist as constants)
      const keywordMap: { [key: string]: number } = {
        SELECT: SnowflakeLexer.SELECT,
        FROM: SnowflakeLexer.FROM,
        WHERE: SnowflakeLexer.WHERE,
        INSERT: SnowflakeLexer.INSERT,
        UPDATE: SnowflakeLexer.UPDATE,
        DELETE: SnowflakeLexer.DELETE,
        CREATE: SnowflakeLexer.CREATE,
        DROP: SnowflakeLexer.DROP,
        ALTER: SnowflakeLexer.ALTER,
        AS: SnowflakeLexer.AS,
        AND: SnowflakeLexer.AND,
        OR: SnowflakeLexer.OR,
        INTO: SnowflakeLexer.INTO,
        VALUES: SnowflakeLexer.VALUES,
        SET: SnowflakeLexer.SET,
        JOIN: SnowflakeLexer.JOIN,
        LEFT: SnowflakeLexer.LEFT,
        RIGHT: SnowflakeLexer.RIGHT,
        INNER: SnowflakeLexer.INNER,
        OUTER: SnowflakeLexer.OUTER,
        ON: SnowflakeLexer.ON,
        GROUP: SnowflakeLexer.GROUP,
        BY: SnowflakeLexer.BY,
        ORDER: SnowflakeLexer.ORDER,
        HAVING: SnowflakeLexer.HAVING,
        LIMIT: SnowflakeLexer.LIMIT,
        OFFSET: SnowflakeLexer.OFFSET,
        UNION: SnowflakeLexer.UNION,
        ALL: SnowflakeLexer.ALL,
        DISTINCT: SnowflakeLexer.DISTINCT,
        COUNT: SnowflakeLexer.COUNT,
        SUM: SnowflakeLexer.SUM,
        AVG: SnowflakeLexer.AVG,
        CASE: SnowflakeLexer.CASE,
        WHEN: SnowflakeLexer.WHEN,
        THEN: SnowflakeLexer.THEN,
        ELSE: SnowflakeLexer.ELSE,
        END: SnowflakeLexer.END,
        IS: SnowflakeLexer.IS,
        NULL: SnowflakeLexer.NULL_,
        NOT: SnowflakeLexer.NOT,
        LIKE: SnowflakeLexer.LIKE,
        IN: SnowflakeLexer.IN,
        BETWEEN: SnowflakeLexer.BETWEEN,
        EXISTS: SnowflakeLexer.EXISTS,
        CAST: SnowflakeLexer.CAST,
        CURRENT_DATE: SnowflakeLexer.CURRENT_DATE,
        CURRENT_TIME: SnowflakeLexer.CURRENT_TIME,
        CURRENT_TIMESTAMP: SnowflakeLexer.CURRENT_TIMESTAMP,
        TRUE: SnowflakeLexer.TRUE,
        FALSE: SnowflakeLexer.FALSE
      };

      if (text && keywordMap[text]) {
        // Only convert to keyword token if the original text was completely lowercase
        const originalText = token.text;
        if (originalText && originalText === originalText.toLowerCase()) {
          // Create a new token with the updated type
          const newToken = {
            ...token,
            type: keywordMap[text]
          };
          return newToken as Token;
        }
      }
    }

    return token;
  }
}
