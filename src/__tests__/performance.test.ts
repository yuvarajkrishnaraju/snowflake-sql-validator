import { SnowflakeSQL } from '../SnowflakeSQL';
import { PerformanceOptimizer } from '../PerformanceOptimizer';

describe('Performance Tests', () => {
  let parser: SnowflakeSQL;

  beforeEach(() => {
    parser = new SnowflakeSQL();
    // Clear caches before each test
    SnowflakeSQL.clearCache();
    PerformanceOptimizer.clearAllCaches();
  });

  afterEach(() => {
    // Clear performance stats after each test
    SnowflakeSQL.clearPerformanceStats();
  });

  it('should demonstrate caching performance improvement', () => {
    const sql = 'select column1, column2 from table1 where column1 = 1';

    // First parse (cache miss)
    const start1 = performance.now();
    const result1 = parser.parse(sql);
    const time1 = performance.now() - start1;

    // Second parse (cache hit)
    const start2 = performance.now();
    const result2 = parser.parse(sql);
    const time2 = performance.now() - start2;

    expect(result1.errors).toHaveLength(0);
    expect(result2.errors).toHaveLength(0);

    // Second parse should be faster due to caching
    expect(time2).toBeLessThan(time1);

    // Verify cache is working
    const cacheStats = SnowflakeSQL.getCacheStats();
    expect(cacheStats.size).toBeGreaterThan(0);
  });

  it('should handle multiple SQL statements efficiently', () => {
    const sqlStatements = [
      'select * from table1',
      'select column1 from table2',
      'insert into table3 values (1, 2)',
      'update table4 set col1 = 10',
      'delete from table5 where id = 1'
    ];

    const start = performance.now();

    // Parse all statements
    sqlStatements.forEach((sql) => {
      const result = parser.parse(sql);
      expect(result.errors).toHaveLength(0);
    });

    const totalTime = performance.now() - start;

    // Should complete in reasonable time
    expect(totalTime).toBeLessThan(1000); // Less than 1 second

    // Check cache utilization
    const cacheStats = SnowflakeSQL.getCacheStats();
    expect(cacheStats.size).toBeGreaterThan(0);
  });

  it('should demonstrate lexer optimization performance', () => {
    const complexSQL = `
      select t1.id, t1.name, t2.category
      from table1 t1
      left join table2 t2 on t1.id = t2.id
      where t1.active = true
      group by t1.category
      having count(*) > 1
      order by t1.name
      limit 10
    `;

    const start = performance.now();
    const result = parser.parse(complexSQL);
    const parseTime = performance.now() - start;

    expect(result.errors).toHaveLength(0);

    // Complex SQL should parse in reasonable time
    expect(parseTime).toBeLessThan(500); // Less than 500ms
  });

  it('should handle case-insensitive parsing efficiently', () => {
    const mixedCaseSQLs = [
      'select column1 from table1',
      'SELECT COLUMN1 FROM TABLE1',
      'SeLeCt CoLuMn1 FrOm TaBlE1'
    ];

    const start = performance.now();

    mixedCaseSQLs.forEach((sql) => {
      const result = parser.parse(sql);
      // First two should pass, third should fail
      if (sql === 'SeLeCt CoLuMn1 FrOm TaBlE1') {
        expect(result.errors.length).toBeGreaterThan(0);
      } else {
        expect(result.errors).toHaveLength(0);
      }
    });

    const totalTime = performance.now() - start;

    // Should complete quickly
    expect(totalTime).toBeLessThan(200); // Less than 200ms
  });

  it('should provide performance statistics', () => {
    // Parse a few SQL statements
    const sql = 'select * from table1';
    parser.parse(sql);
    parser.parse(sql);
    parser.parse('insert into table2 values (1)');

    const stats = SnowflakeSQL.getPerformanceStats();

    expect(stats.totalParses).toBe(3);
    expect(stats.averageParseTime).toBeGreaterThan(0);
    expect(typeof stats.cacheHitRate).toBe('number');
  });

  it('should handle cache size limits properly', () => {
    // Generate many unique SQL statements to test cache limits
    const sqlStatements = [];
    for (let i = 0; i < 1100; i++) {
      sqlStatements.push(`select column${i} from table${i}`);
    }

    // Parse all statements
    sqlStatements.forEach((sql) => {
      parser.parse(sql);
    });

    const cacheStats = SnowflakeSQL.getCacheStats();

    // Cache should not exceed the limit
    expect(cacheStats.size).toBeLessThanOrEqual(cacheStats.limit);

    // Performance should remain good even with cache management
    const start = performance.now();
    parser.parse('select * from test_table');
    const parseTime = performance.now() - start;

    expect(parseTime).toBeLessThan(100); // Should still be fast
  });

  it('should demonstrate batch processing performance', () => {
    const items = Array.from({ length: 1000 }, (_, i) => `select * from table${i}`);

    const start = performance.now();

    // Process in batches
    PerformanceOptimizer.batch(items, 100, (batch) => {
      batch.forEach((sql) => {
        parser.parse(sql);
      });
    });

    const totalTime = performance.now() - start;

    // Batch processing should be efficient
    expect(totalTime).toBeLessThan(2000); // Less than 2 seconds for 1000 statements

    const stats = SnowflakeSQL.getPerformanceStats();
    expect(stats.totalParses).toBe(1000);
  });
});
