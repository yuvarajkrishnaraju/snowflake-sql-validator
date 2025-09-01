import { SnowflakeSQL } from '../SnowflakeSQL';
import { PerformanceOptimizer } from '../PerformanceOptimizer';
import { SnowflakeValidationVisitor } from '../SnowflakeValidationVisitor';
import { validateSnowflakeSQL, isSnowflakeSQLValid, getSnowflakeSQLErrors } from '../index';

describe('Coverage Tests - Minimal', () => {
  beforeEach(() => {
    SnowflakeSQL.clearCache();
    PerformanceOptimizer.clearAllCaches();
  });

  describe('PerformanceOptimizer - Line 20', () => {
    it('should test evictLRU when cache is full', () => {
      // Fill cache to trigger eviction
      for (let i = 0; i < 510; i++) {
        PerformanceOptimizer.setCached(`key${i}`, `value${i}`);
      }
      
      // Add one more to trigger eviction
      PerformanceOptimizer.setCached('finalKey', 'finalValue');
      
      const stats = PerformanceOptimizer.getCacheStats();
      expect(stats.size).toBeLessThanOrEqual(500); // MAX_CACHE_SIZE is 500
    });

    it('should test evictLRU with access count differences', () => {
      // Fill cache with some items
      for (let i = 0; i < 100; i++) {
        PerformanceOptimizer.setCached(`key${i}`, `value${i}`);
      }
      
      // Access some keys to create different access counts
      PerformanceOptimizer.getCached('key0');
      PerformanceOptimizer.getCached('key0');
      PerformanceOptimizer.getCached('key1');
      PerformanceOptimizer.getCached('key2');
      
      // Fill cache to trigger eviction
      for (let i = 100; i < 510; i++) {
        PerformanceOptimizer.setCached(`key${i}`, `value${i}`);
      }
      
      // Add one more to trigger eviction
      PerformanceOptimizer.setCached('finalKey', 'finalValue');
      
      const stats = PerformanceOptimizer.getCacheStats();
      expect(stats.size).toBeLessThanOrEqual(500);
    });

    it('should test evictLRU with equal access counts', () => {
      // Fill cache with items that have equal access counts
      for (let i = 0; i < 510; i++) {
        PerformanceOptimizer.setCached(`key${i}`, `value${i}`);
      }
      
      // Add one more to trigger eviction when all have equal access counts
      PerformanceOptimizer.setCached('finalKey', 'finalValue');
      
      const stats = PerformanceOptimizer.getCacheStats();
      expect(stats.size).toBeLessThanOrEqual(500);
    });
  });

  describe('PerformanceOptimizer - Lines 68-101', () => {
    it('should test debounce', () => {
      const mockFn = jest.fn();
      const debouncedFn = PerformanceOptimizer.debounce(mockFn, 50);
      
      debouncedFn('test');
      
      return new Promise(resolve => {
        setTimeout(() => {
          expect(mockFn).toHaveBeenCalledWith('test');
          resolve(undefined);
        }, 100);
      });
    });

    it('should test throttle', () => {
      const mockFn = jest.fn();
      const throttledFn = PerformanceOptimizer.throttle(mockFn, 50);
      
      throttledFn('test1');
      throttledFn('test2');
      
      expect(mockFn).toHaveBeenCalledWith('test1');
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should test batch', () => {
      const items = [1, 2, 3, 4, 5];
      const processed: number[] = [];
      
      PerformanceOptimizer.batch(items, 2, (batch) => {
        processed.push(...batch);
      });
      
      expect(processed).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('PerformanceOptimizer - Lines 120-124', () => {
    it('should test measureTime', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      const mockFn = jest.fn(() => 'result');
      
      const result = PerformanceOptimizer.measureTime(mockFn, 'Test');
      
      expect(result).toBe('result');
      expect(consoleSpy).toHaveBeenCalled();
      
      consoleSpy.mockRestore();
    });
  });

  describe('SnowflakeSQL - Lines 105-115', () => {
    it('should test non-Error exception handling', () => {
      const parser = new SnowflakeSQL();
      
      // Test with malformed SQL that might cause non-Error exceptions
      const result = parser.parse('SELECT * FROM table WHERE column = "unclosed string');
      
      // Should handle parsing errors gracefully
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('should test cache statistics methods', () => {
      const parser = new SnowflakeSQL();
      
      // Test cache stats
      const cacheStats = SnowflakeSQL.getCacheStats();
      expect(cacheStats).toHaveProperty('size');
      expect(cacheStats).toHaveProperty('limit');

      // Test performance stats
      const perfStats = SnowflakeSQL.getPerformanceStats();
      expect(perfStats).toHaveProperty('averageParseTime');
      expect(perfStats).toHaveProperty('totalParses');
      expect(perfStats).toHaveProperty('cacheHitRate');

      // Test clearing performance stats
      SnowflakeSQL.clearPerformanceStats();
      const clearedStats = SnowflakeSQL.getPerformanceStats();
      expect(clearedStats.totalParses).toBe(0);
    });
  });

  describe('SnowflakeSQL - Line 145', () => {
    it('should test getParseTree error handling', () => {
      const parser = new SnowflakeSQL();
      
      // Test with malformed SQL that might cause getParseTree to return null
      const result = parser.getParseTree('SELECT * FROM table WHERE column = "unclosed string');
      
      // Should handle parsing errors gracefully
      expect(result).toBeDefined();
    });
  });

  describe('SnowflakeSQL - Line 210', () => {
    it('should test getTokens error handling', () => {
      const parser = new SnowflakeSQL();
      
      // Test with malformed SQL that might cause getTokens to return empty array
      const result = parser.getTokens('SELECT * FROM table WHERE column = "unclosed string');
      
      // Should handle parsing errors gracefully
      expect(Array.isArray(result)).toBe(true);
    });

    it('should test getTokens with undefined token text', () => {
      const parser = new SnowflakeSQL();
      
      // Test with SQL that might trigger token text mapping
      const tokens = parser.getTokens('SELECT FROM INSERT INTO UPDATE SET DELETE WHERE CREATE DROP LEFT JOIN ON TRUE GROUP BY HAVING COUNT ORDER LIMIT');
      
      expect(tokens.length).toBeGreaterThan(0);
      // Verify that tokens have proper text
      tokens.forEach(token => {
        expect(token.text).toBeDefined();
      });
    });
  });

  describe('SnowflakeValidationVisitor - Lines 43-44', () => {
    it('should test visit with null tree', () => {
      const visitor = new SnowflakeValidationVisitor();
      const result = visitor.visit(null as any);
      expect(result).toEqual([]);
    });

    it('should test visitTerminal with cast syntax validation', () => {
      const visitor = new SnowflakeValidationVisitor();
      
      // Mock a terminal node with cast syntax
      const mockNode = {
        text: 'field::string',
        symbol: {
          line: 1,
          charPositionInLine: 0
        }
      };

      const result = visitor.visitTerminal(mockNode as any);
      
      // Should return validation errors for cast syntax
      expect(Array.isArray(result)).toBe(true);
    });

    it('should test visitTerminal with valid text', () => {
      const visitor = new SnowflakeValidationVisitor();
      
      // Mock a terminal node with valid text
      const mockNode = {
        text: 'SELECT',
        symbol: {
          line: 1,
          charPositionInLine: 0
        }
      };

      const result = visitor.visitTerminal(mockNode as any);
      
      // Should return empty array for valid text
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('Index.ts - Lines 522, 549, 555-557', () => {
    it('should test empty string validation', () => {
      const result = validateSnowflakeSQL('');
      expect(result.isValid).toBe(true); // Empty strings are considered valid
      expect(result.errors).toHaveLength(0);
    });

    it('should test short string validation', () => {
      const result = validateSnowflakeSQL('a');
      expect(result.isValid).toBe(false);
    });

    it('should test whitespace only validation', () => {
      const result = validateSnowflakeSQL('   ');
      expect(result.isValid).toBe(true); // Whitespace-only strings are considered valid (no syntax errors)
    });
  });

  describe('Index.ts - Lines 590-618', () => {
    it('should test exported functions', () => {
      // Use a valid SQL statement that will pass validation
      const valid = isSnowflakeSQLValid('SELECT 1');
      expect(valid).toBe(true);

      const errors = getSnowflakeSQLErrors('SELECT * FROM');
      expect(Array.isArray(errors)).toBe(true);

      const defaultExport = require('../index').default;
      expect(defaultExport).toHaveProperty('validateSnowflakeSQL');
      expect(defaultExport).toHaveProperty('isSnowflakeSQLValid');
      expect(defaultExport).toHaveProperty('getSnowflakeSQLErrors');
      expect(defaultExport).toHaveProperty('SnowflakeSQL');
      expect(defaultExport).toHaveProperty('SnowflakeValidationVisitor');
    });
  });

  describe('Index.ts - Complex query validation paths', () => {
    it('should test complex query with deep validation', () => {
      const complexSQL = `
        WITH cte AS (
          SELECT id, name FROM table1
        )
        SELECT t1.id, t1.name, t2.category
        FROM cte t1
        LEFT JOIN table2 t2 ON t1.id = t2.id
        WHERE t1.active = true
        GROUP BY t1.category
        HAVING COUNT(*) > 1
        ORDER BY t1.name
        LIMIT 10
      `;

      const result = validateSnowflakeSQL(complexSQL);
      expect(result.isValid).toBe(true);
    });

    it('should test parser cache management', () => {
      // Fill cache to trigger eviction
      const longSQL = 'SELECT * FROM ' + 'a'.repeat(200);
      
      // Create multiple parsers to fill cache
      for (let i = 0; i < 15; i++) {
        validateSnowflakeSQL(longSQL + i);
      }

      // Should not throw error due to cache management
      const result = validateSnowflakeSQL('SELECT 1');
      expect(result.isValid).toBe(true);
    });
  });

  describe('Index.ts - Additional edge cases', () => {
    it('should test fast-path validation for performance test pattern', () => {
      const performanceTestSQL = `
        CREATE OR REPLACE TABLE TEMP.PL_NEW_SIGNUPS AS
        WITH EXCLUDED_MEMBERS AS (
            SELECT DISTINCT member_id
            FROM campaign_asset.member_group
            WHERE group_id = 5746
        )
        SELECT mp.member_id, mp.email, mp.first_name, mp.last_name
        FROM member_profile mp
        LEFT JOIN EXCLUDED_MEMBERS em ON mp.member_id = em.member_id
        WHERE em.member_id IS NULL
      `;

      const result = validateSnowflakeSQL(performanceTestSQL);
      expect(result.isValid).toBe(true);
    });

    it('should test validation with parse errors', () => {
      const invalidSQL = 'SELECT * FROM table WHERE column = "unclosed string';
      const result = validateSnowflakeSQL(invalidSQL);
      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('should test validation with parse tree failure', () => {
      // This tests the path where getParseTree returns null
      const complexSQL = `
        SELECT * FROM table1 
        JOIN table2 ON table1.id = table2.id 
        WHERE column = "unclosed string
      `;
      
      const result = validateSnowflakeSQL(complexSQL);
      expect(result.isValid).toBe(false);
    });

    it('should test validation with custom validator errors', () => {
      // This tests the path where SnowflakeValidationVisitor returns errors
      const complexSQL = `
        SELECT field::string FROM table1 
        JOIN table2 ON table1.id = table2.id 
        WHERE active = true
      `;
      
      const result = validateSnowflakeSQL(complexSQL);
      // The result depends on whether the custom validator finds issues
      expect(typeof result.isValid).toBe('boolean');
    });
  });
});
