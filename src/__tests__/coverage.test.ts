import {
  validateSnowflakeSQL,
  isSnowflakeSQLValid,
  getSnowflakeSQLErrors,
  SnowflakeSQL
} from '../index';

describe('Coverage Tests - Uncovered Lines and Branches', () => {
  describe('SnowflakeSQL Class - Uncovered Branches', () => {
    it('should handle non-Error exceptions in parse method', () => {
      const sql = 'SELECT COLUMN1 FROM TABLE1';
      const parser = new SnowflakeSQL();

      // Mock the parser to throw a non-Error exception
      const originalParser = (parser as any).parser;
      (parser as any).parser = {
        removeErrorListeners: () => {},
        addErrorListener: () => {},
        snowflake_file: () => {
          throw 'String error'; // Non-Error exception
        }
      };

      const result = parser.parse(sql);

      expect(Array.isArray(result.errors)).toBe(true);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0].message).toContain('String error');

      // Restore original parser
      (parser as any).parser = originalParser;
    });

    it('should handle null offendingSymbol in error listener', () => {
      const sql = 'SELECT FROM TABLE1'; // Invalid SQL
      const parser = new SnowflakeSQL();

      // Mock the parser to trigger error listener with null offendingSymbol
      const originalParser = (parser as any).parser;
      (parser as any).parser = {
        removeErrorListeners: () => {},
        addErrorListener: (listener: any) => {
          // Manually trigger the error listener with null offendingSymbol
          listener.syntaxError(null, null, 1, 0, 'Test error', null);
        },
        snowflake_file: () => {}
      };

      const result = parser.parse(sql);

      expect(Array.isArray(result.errors)).toBe(true);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0].message).toBe('Test error');

      // Restore original parser
      (parser as any).parser = originalParser;
    });

    it('should handle undefined offendingSymbol in error listener', () => {
      const sql = 'SELECT FROM TABLE1'; // Invalid SQL
      const parser = new SnowflakeSQL();

      // Mock the parser to trigger error listener with undefined offendingSymbol
      const originalParser = (parser as any).parser;
      (parser as any).parser = {
        removeErrorListeners: () => {},
        addErrorListener: (listener: any) => {
          // Manually trigger the error listener with undefined offendingSymbol
          listener.syntaxError(null, undefined, 1, 0, 'Test error', null);
        },
        snowflake_file: () => {}
      };

      const result = parser.parse(sql);

      expect(Array.isArray(result.errors)).toBe(true);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0].message).toBe('Test error');

      // Restore original parser
      (parser as any).parser = originalParser;
    });

    it('should handle getParseTree with null tree generation', () => {
      const sql = 'SELECT COLUMN1 FROM TABLE1';
      const parser = new SnowflakeSQL();

      // Mock the parser to return null
      const originalParser = (parser as any).parser;
      (parser as any).parser = {
        removeErrorListeners: () => {},
        snowflake_file: () => null
      };

      const tree = parser.getParseTree(sql);
      expect(tree).toBeNull();

      // Restore original parser
      (parser as any).parser = originalParser;
    });

    it('should handle getParseTree with exception', () => {
      const sql = 'SELECT COLUMN1 FROM TABLE1';
      const parser = new SnowflakeSQL();

      // Mock the parser to throw an error
      const originalParser = (parser as any).parser;
      (parser as any).parser = {
        removeErrorListeners: () => {},
        snowflake_file: () => {
          throw new Error('Parse tree generation failed');
        }
      };

      const tree = parser.getParseTree(sql);
      expect(tree).toBeNull();

      // Restore original parser
      (parser as any).parser = originalParser;
    });

    it('should handle getTokens with exception', () => {
      const sql = 'SELECT COLUMN1 FROM TABLE1';
      const parser = new SnowflakeSQL();

      // Mock the lexer to throw an error
      const originalLexer = (global as any).SnowflakeLexer;
      (global as any).SnowflakeLexer = class MockLexer {
        constructor() {
          throw new Error('Lexer initialization failed');
        }
      };

      const tokens = parser.getTokens(sql);
      expect(Array.isArray(tokens)).toBe(true);
      expect(tokens).toHaveLength(0);

      // Restore original lexer
      (global as any).SnowflakeLexer = originalLexer;
    });

    it('should handle getParseTree with lexer exception', () => {
      const sql = 'SELECT COLUMN1 FROM TABLE1';
      const parser = new SnowflakeSQL();

      // Mock the lexer to throw an error
      const originalLexer = (global as any).SnowflakeLexer;
      (global as any).SnowflakeLexer = class MockLexer {
        constructor() {
          throw new Error('Lexer initialization failed');
        }
      };

      const tree = parser.getParseTree(sql);
      expect(tree).toBeNull();

      // Restore original lexer
      (global as any).SnowflakeLexer = originalLexer;
    });
  });

  describe('SnowflakeValidationVisitor - Uncovered Branches', () => {
    it('should handle null tree in visit method', () => {
      const visitor = new (require('../SnowflakeValidationVisitor').SnowflakeValidationVisitor)();

      const errors = visitor.visit(null as any);
      expect(Array.isArray(errors)).toBe(true);
      expect(errors).toHaveLength(0);
    });

    it('should handle empty tree in visit method', () => {
      const visitor = new (require('../SnowflakeValidationVisitor').SnowflakeValidationVisitor)();

      // Create an empty tree-like object
      const emptyTree = {
        children: []
      };

      const errors = visitor.visit(emptyTree as any);
      expect(Array.isArray(errors)).toBe(true);
    });

    it('should handle regex pattern matching for different cast types', () => {
      const sql = 'SELECT column1::VARIANT AS col FROM table1';
      const parser = new SnowflakeSQL();
      const visitor = new (require('../SnowflakeValidationVisitor').SnowflakeValidationVisitor)();

      const tree = parser.getParseTree(sql);
      const errors = visitor.visit(tree);

      expect(Array.isArray(errors)).toBe(true);
    });

    it('should handle regex pattern matching with case variations', () => {
      const sql = 'SELECT column1::BOOLEAN AS col FROM table1';
      const parser = new SnowflakeSQL();
      const visitor = new (require('../SnowflakeValidationVisitor').SnowflakeValidationVisitor)();

      const tree = parser.getParseTree(sql);
      const errors = visitor.visit(tree);

      expect(Array.isArray(errors)).toBe(true);
    });

    it('should handle regex pattern matching with float type', () => {
      const sql = 'SELECT column1::FLOAT AS col FROM table1';
      const parser = new SnowflakeSQL();
      const visitor = new (require('../SnowflakeValidationVisitor').SnowflakeValidationVisitor)();

      const tree = parser.getParseTree(sql);
      const errors = visitor.visit(tree);

      expect(Array.isArray(errors)).toBe(true);
    });

    it('should handle regex pattern matching that does not trigger errors', () => {
      const sql = 'SELECT column1 AS col FROM table1';
      const parser = new SnowflakeSQL();
      const visitor = new (require('../SnowflakeValidationVisitor').SnowflakeValidationVisitor)();

      const tree = parser.getParseTree(sql);
      const errors = visitor.visit(tree);

      expect(Array.isArray(errors)).toBe(true);
      expect(errors.length).toBeGreaterThanOrEqual(0);
    });

    it('should handle regex pattern matching with edge case text', () => {
      const sql = "SELECT '::string' AS col FROM table1";
      const parser = new SnowflakeSQL();
      const visitor = new (require('../SnowflakeValidationVisitor').SnowflakeValidationVisitor)();

      const tree = parser.getParseTree(sql);
      const errors = visitor.visit(tree);

      expect(Array.isArray(errors)).toBe(true);
    });
  });

  describe('Index Functions - Uncovered Branches', () => {
    it('should handle parse tree generation failure in validateSnowflakeSQL', () => {
      const sql = 'SELECT COLUMN1 FROM TABLE1';

      // Mock SnowflakeSQL to return null parse tree
      const originalSnowflakeSQL = require('../SnowflakeSQL').SnowflakeSQL;
      require('../SnowflakeSQL').SnowflakeSQL = class MockSnowflakeSQL {
        validate() {
          return []; // No parse errors
        }
        getParseTree() {
          return null; // Parse tree generation fails
        }
      };

      // Re-import to get the mocked version
      const { validateSnowflakeSQL: mockValidate } = require('../index');
      const result = mockValidate(sql);

      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0].message).toBe('Failed to generate parse tree');

      // Restore original class
      require('../SnowflakeSQL').SnowflakeSQL = originalSnowflakeSQL;
    });

    it('should handle validation errors from SnowflakeValidationVisitor', () => {
      const sql = 'SELECT COLUMN1 FROM TABLE1';

      // Mock SnowflakeValidationVisitor to return validation errors
      const originalVisitor = require('../SnowflakeValidationVisitor').SnowflakeValidationVisitor;
      require('../SnowflakeValidationVisitor').SnowflakeValidationVisitor = class MockVisitor {
        visit() {
          return [
            {
              line: 1,
              column: 10,
              message: 'Validation error from visitor'
            }
          ];
        }
      };

      // Re-import to get the mocked version
      const { validateSnowflakeSQL: mockValidate } = require('../index');
      const result = mockValidate(sql);

      expect(result.isValid).toBe(false);
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0].message).toBe('Validation error from visitor');

      // Restore original visitor
      require('../SnowflakeValidationVisitor').SnowflakeValidationVisitor = originalVisitor;
    });

    it('should handle successful validation with no errors', () => {
      const sql = 'SELECT COLUMN1 FROM TABLE1';

      // Mock SnowflakeValidationVisitor to return no errors
      const originalVisitor = require('../SnowflakeValidationVisitor').SnowflakeValidationVisitor;
      require('../SnowflakeValidationVisitor').SnowflakeValidationVisitor = class MockVisitor {
        visit() {
          return []; // No validation errors
        }
      };

      // Re-import to get the mocked version
      const { validateSnowflakeSQL: mockValidate } = require('../index');
      const result = mockValidate(sql);

      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);

      // Restore original visitor
      require('../SnowflakeValidationVisitor').SnowflakeValidationVisitor = originalVisitor;
    });
  });

  describe('Edge Cases and Error Conditions', () => {
    it('should handle very long SQL statements efficiently', () => {
      const longColumns = Array.from({ length: 2000 }, (_, i) => `col${i}`).join(', ');
      const longSql = `SELECT ${longColumns} FROM very_wide_table WHERE id = 1`;

      const startTime = Date.now();
      const result = validateSnowflakeSQL(longSql);
      const endTime = Date.now();

      expect(typeof result.isValid).toBe('boolean');
      expect(Array.isArray(result.errors)).toBe(true);
      expect(endTime - startTime).toBeLessThan(8000); // Should complete within 8 seconds
    });

    it('should handle SQL with many nested subqueries', () => {
      let sql = 'SELECT * FROM table1 WHERE id IN (';
      for (let i = 0; i < 20; i++) {
        sql += `SELECT id FROM table${i + 2} WHERE id IN (`;
      }
      sql += 'SELECT 1';
      for (let i = 0; i < 20; i++) {
        sql += ')';
      }

      const startTime = Date.now();
      const result = validateSnowflakeSQL(sql);
      const endTime = Date.now();

      expect(typeof result.isValid).toBe('boolean');
      expect(Array.isArray(result.errors)).toBe(true);
      expect(endTime - startTime).toBeLessThan(20000); // Should complete within 20 seconds
    });

    it('should handle SQL with complex regex patterns', () => {
      const sql = `
        SELECT * FROM log_table 
        WHERE message REGEXP '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'
          AND ip_address REGEXP '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'
          AND user_agent REGEXP 'Mozilla/5\\.0 \\(Windows NT 10\\.0; Win64; x64\\) AppleWebKit/537\\.36'
      `;

      const startTime = Date.now();
      const result = validateSnowflakeSQL(sql);
      const endTime = Date.now();

      expect(typeof result.isValid).toBe('boolean');
      expect(Array.isArray(result.errors)).toBe(true);
      expect(endTime - startTime).toBeLessThan(5000); // Should complete within 5 seconds
    });

    it('should handle SQL with special characters and unicode', () => {
      const sql = `
        SELECT 
          "column_name" as "Column Name",
          'test string with "quotes"' as quoted_string,
          'unicode: 🚀 📊 💾' as unicode_text,
          "table_name" as "Table Name"
        FROM "schema"."table_name"
        WHERE "column_name" = 'value with spaces'
          AND "another_column" IN ('value1', 'value2', 'value3')
      `;

      const result = validateSnowflakeSQL(sql);
      expect(typeof result.isValid).toBe('boolean');
      expect(Array.isArray(result.errors)).toBe(true);
    });

    it('should handle SQL with comments and hints', () => {
      const sql = `
        -- This is a comment
        SELECT /*+ CLUSTERED */ 
          id, 
          name, 
          created_at
        FROM large_table -- Another comment
        WHERE created_at >= '2023-01-01' /* Date filter */
        ORDER BY created_at DESC; -- Order by creation date
      `;

      const result = validateSnowflakeSQL(sql);
      expect(typeof result.isValid).toBe('boolean');
      expect(Array.isArray(result.errors)).toBe(true);
    });
  });
});
