import {
  validateSnowflakeSQL,
  isSnowflakeSQLValid,
  getSnowflakeSQLErrors,
  SnowflakeSQL
} from '../index';

describe.skip('Performance Tests', () => {
  describe('Simple SQL Performance', () => {
    it('should validate simple SELECT statements quickly', () => {
      const simpleQueries = [
        'SELECT * FROM table1',
        'SELECT id, name FROM users WHERE active = true',
        'SELECT COUNT(*) FROM orders WHERE status = "completed"',
        'SELECT name, email FROM customers LIMIT 100',
        'SELECT * FROM products WHERE price > 100 ORDER BY price DESC'
      ];

      const startTime = Date.now();
      simpleQueries.forEach((query) => {
        const result = validateSnowflakeSQL(query);
        expect(typeof result.isValid).toBe('boolean');
        expect(Array.isArray(result.errors)).toBe(true);
      });
      const endTime = Date.now();

      const avgTime = (endTime - startTime) / simpleQueries.length;
      expect(avgTime).toBeLessThan(100); // Each query should take less than 100ms on average
    });

    it('should handle multiple simple validations efficiently', () => {
      const parser = new SnowflakeSQL();
      const queries = Array.from({ length: 100 }, (_, i) => `SELECT col${i} FROM table${i}`);

      const startTime = Date.now();
      queries.forEach((query) => {
        const result = parser.isValid(query);
        expect(typeof result).toBe('boolean');
      });
      const endTime = Date.now();

      const totalTime = endTime - startTime;
      expect(totalTime).toBeLessThan(2000); // 100 queries should complete in under 2 seconds
    });
  });

  describe('Medium Complexity SQL Performance', () => {
    it('should validate JOIN queries efficiently', () => {
      const joinQueries = [
        `SELECT t1.id, t2.name 
         FROM table1 t1 
         INNER JOIN table2 t2 ON t1.id = t2.id 
         WHERE t1.active = true`,
        `SELECT o.order_id, c.customer_name, p.product_name
         FROM orders o
         LEFT JOIN customers c ON o.customer_id = c.customer_id
         LEFT JOIN products p ON o.product_id = p.product_id
         WHERE o.order_date >= '2023-01-01'`,
        `SELECT d.department_name, COUNT(e.id) as employee_count
         FROM departments d
         RIGHT JOIN employees e ON d.department_id = e.department_id
         GROUP BY d.department_name
         HAVING COUNT(e.id) > 5`
      ];

      const startTime = Date.now();
      joinQueries.forEach((query) => {
        const result = validateSnowflakeSQL(query);
        expect(typeof result.isValid).toBe('boolean');
        expect(Array.isArray(result.errors)).toBe(true);
      });
      const endTime = Date.now();

      const avgTime = (endTime - startTime) / joinQueries.length;
      expect(avgTime).toBeLessThan(500); // Each JOIN query should take less than 500ms
    });

    it('should handle subqueries efficiently', () => {
      const subqueryQueries = [
        `SELECT * FROM table1 
         WHERE id IN (SELECT id FROM table2 WHERE status = 'active')`,
        `SELECT name, (SELECT MAX(score) FROM scores s WHERE s.user_id = u.id) as max_score
         FROM users u`,
        `SELECT department_name, 
                (SELECT AVG(salary) FROM employees e WHERE e.department_id = d.id) as avg_salary
         FROM departments d`
      ];

      const startTime = Date.now();
      subqueryQueries.forEach((query) => {
        const result = validateSnowflakeSQL(query);
        expect(typeof result.isValid).toBe('boolean');
        expect(Array.isArray(result.errors)).toBe(true);
      });
      const endTime = Date.now();

      const avgTime = (endTime - startTime) / subqueryQueries.length;
      expect(avgTime).toBeLessThan(800); // Each subquery should take less than 800ms
    });
  });

  describe('Complex SQL Performance', () => {
    it('should validate window functions efficiently', () => {
      const windowFunctionQuery = `
        SELECT 
          id,
          name,
          salary,
          AVG(salary) OVER (PARTITION BY department_id) as avg_dept_salary,
          RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as salary_rank,
          LAG(salary, 1) OVER (ORDER BY hire_date) as prev_salary,
          LEAD(salary, 1) OVER (ORDER BY hire_date) as next_salary,
          FIRST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY hire_date) as first_salary,
          LAST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY hire_date ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) as last_salary
        FROM employees
        QUALIFY salary_rank <= 10
      `;

      const startTime = Date.now();
      const result = validateSnowflakeSQL(windowFunctionQuery);
      const endTime = Date.now();

      expect(typeof result.isValid).toBe('boolean');
      expect(Array.isArray(result.errors)).toBe(true);
      expect(endTime - startTime).toBeLessThan(2000); // Complex window function should complete in under 2 seconds
    });

    it('should validate CTEs efficiently', () => {
      const cteQuery = `
        WITH 
        active_users AS (
          SELECT id, name, email, created_at
          FROM users
          WHERE status = 'active' AND last_login >= DATEADD(day, -30, CURRENT_DATE())
        ),
        user_orders AS (
          SELECT user_id, COUNT(*) as order_count, SUM(total_amount) as total_spent
          FROM orders
          WHERE order_date >= DATEADD(month, -6, CURRENT_DATE())
          GROUP BY user_id
        ),
        user_stats AS (
          SELECT 
            au.id,
            au.name,
            au.email,
            COALESCE(uo.order_count, 0) as order_count,
            COALESCE(uo.total_spent, 0) as total_spent,
            au.created_at
          FROM active_users au
          LEFT JOIN user_orders uo ON au.id = uo.user_id
        )
        SELECT 
          id,
          name,
          email,
          order_count,
          total_spent,
          CASE 
            WHEN total_spent > 1000 THEN 'high_value'
            WHEN total_spent > 100 THEN 'medium_value'
            ELSE 'low_value'
          END as customer_segment
        FROM user_stats
        ORDER BY total_spent DESC
      `;

      const startTime = Date.now();
      const result = validateSnowflakeSQL(cteQuery);
      const endTime = Date.now();

      expect(typeof result.isValid).toBe('boolean');
      expect(Array.isArray(result.errors)).toBe(true);
      expect(endTime - startTime).toBeLessThan(3000); // Complex CTE should complete in under 3 seconds
    });

    it('should validate recursive CTEs efficiently', () => {
      const recursiveCteQuery = `
        WITH RECURSIVE employee_hierarchy AS (
          -- Base case: employees with no manager
          SELECT 
            id, 
            name, 
            manager_id, 
            1 as level,
            CAST(name AS VARCHAR) as hierarchy_path
          FROM employees
          WHERE manager_id IS NULL
          
          UNION ALL
          
          -- Recursive case: employees with managers
          SELECT 
            e.id, 
            e.name, 
            e.manager_id, 
            eh.level + 1,
            eh.hierarchy_path || ' -> ' || e.name
          FROM employees e
          JOIN employee_hierarchy eh ON e.manager_id = eh.id
          WHERE eh.level < 10
        )
        SELECT 
          id,
          name,
          level,
          hierarchy_path,
          LENGTH(hierarchy_path) as path_length
        FROM employee_hierarchy
        ORDER BY level, name
      `;

      const startTime = Date.now();
      const result = validateSnowflakeSQL(recursiveCteQuery);
      const endTime = Date.now();

      expect(typeof result.isValid).toBe('boolean');
      expect(Array.isArray(result.errors)).toBe(true);
      expect(endTime - startTime).toBeLessThan(4000); // Recursive CTE should complete in under 4 seconds
    });
  });

  describe('Snowflake-Specific Features Performance', () => {
    it('should validate semi-structured data access efficiently', () => {
      const semiStructuredQuery = `
        SELECT 
          id,
          data:customer.name::VARCHAR as customer_name,
          data:customer.email::VARCHAR as customer_email,
          data:orders[0].amount::NUMBER as first_order_amount,
          data:orders[*].amount::NUMBER as all_order_amounts,
          data:metadata.tags::ARRAY as tags,
          data:metadata.preferences::OBJECT as preferences,
          PARSE_JSON(data:raw_json) as parsed_data,
          TRY_CAST(data:customer.age::STRING AS NUMBER) as customer_age
        FROM json_table
        WHERE data:customer.active::BOOLEAN = TRUE
          AND data:orders[*].amount::NUMBER > 100
          AND data:metadata.tags::ARRAY CONTAINS 'premium'
      `;

      const startTime = Date.now();
      const result = validateSnowflakeSQL(semiStructuredQuery);
      const endTime = Date.now();

      expect(typeof result.isValid).toBe('boolean');
      expect(Array.isArray(result.errors)).toBe(true);
      expect(endTime - startTime).toBeLessThan(3000); // Semi-structured query should complete in under 3 seconds
    });

    it('should validate time travel and cloning efficiently', () => {
      const timeTravelQuery = `
        SELECT * FROM table_name
        AT (TIMESTAMP => '2023-01-01 00:00:00'::TIMESTAMP)
        WHERE created_at <= CURRENT_TIMESTAMP()
        
        UNION ALL
        
        SELECT * FROM table_name
        AT (OFFSET => -60*60*24*7) -- 7 days ago
        WHERE created_at <= DATEADD(day, -7, CURRENT_DATE())
        
        UNION ALL
        
        SELECT * FROM table_name
        BEFORE (STATEMENT => '8e5d0ca9-0053-44e6-b8a4-c53e2199d6c9')
        WHERE created_at <= CURRENT_TIMESTAMP()
      `;

      const startTime = Date.now();
      const result = validateSnowflakeSQL(timeTravelQuery);
      const endTime = Date.now();

      expect(typeof result.isValid).toBe('boolean');
      expect(Array.isArray(result.errors)).toBe(true);
      expect(endTime - startTime).toBeLessThan(4000); // Time travel query should complete in under 4 seconds
    });
  });

  describe('Stress Tests', () => {
    it('should handle extremely long column lists', () => {
      const columnCount = 5000;
      const longColumns = Array.from({ length: columnCount }, (_, i) => `col${i}`).join(', ');
      const longSql = `SELECT ${longColumns} FROM very_wide_table WHERE id = 1`;

      const startTime = Date.now();
      const result = validateSnowflakeSQL(longSql);
      const endTime = Date.now();

      expect(typeof result.isValid).toBe('boolean');
      expect(Array.isArray(result.errors)).toBe(true);
      expect(endTime - startTime).toBeLessThan(10000); // Should complete within 10 seconds
    });

    it('should handle deeply nested subqueries', () => {
      let sql = 'SELECT * FROM table1 WHERE id IN (';
      const nestingLevel = 15;

      for (let i = 0; i < nestingLevel; i++) {
        sql += `SELECT id FROM table${i + 2} WHERE id IN (`;
      }
      sql += 'SELECT 1';
      for (let i = 0; i < nestingLevel; i++) {
        sql += ')';
      }

      const startTime = Date.now();
      const result = validateSnowflakeSQL(sql);
      const endTime = Date.now();

      expect(typeof result.isValid).toBe('boolean');
      expect(Array.isArray(result.errors)).toBe(true);
      expect(endTime - startTime).toBeLessThan(15000); // Should complete within 15 seconds
    });

    it('should handle large IN clauses efficiently', () => {
      const largeInClause = Array.from({ length: 10000 }, (_, i) => i + 1).join(', ');
      const sql = `SELECT * FROM large_table WHERE id IN (${largeInClause})`;

      const startTime = Date.now();
      const result = validateSnowflakeSQL(sql);
      const endTime = Date.now();

      expect(typeof result.isValid).toBe('boolean');
      expect(Array.isArray(result.errors)).toBe(true);
      expect(endTime - startTime).toBeLessThan(8000); // Should complete within 8 seconds
    });

    it('should handle complex CASE statements efficiently', () => {
      let caseSql = 'SELECT id, CASE ';
      for (let i = 1; i <= 100; i++) {
        caseSql += `WHEN value = ${i} THEN 'category_${i}' `;
      }
      caseSql += 'ELSE "unknown" END as category FROM table';

      const startTime = Date.now();
      const result = validateSnowflakeSQL(caseSql);
      const endTime = Date.now();

      expect(typeof result.isValid).toBe('boolean');
      expect(Array.isArray(result.errors)).toBe(true);
      expect(endTime - startTime).toBeLessThan(5000); // Should complete within 5 seconds
    });
  });

  describe('Memory Usage Tests', () => {
    it('should not cause memory leaks with repeated validations', () => {
      const queries = [
        'SELECT * FROM table1',
        'SELECT id, name FROM users WHERE active = true',
        'SELECT COUNT(*) FROM orders WHERE status = "completed"',
        'SELECT name, email FROM customers LIMIT 100'
      ];

      const iterations = 1000;
      const startMemory = process.memoryUsage().heapUsed;

      for (let i = 0; i < iterations; i++) {
        queries.forEach((query) => {
          const result = validateSnowflakeSQL(query);
          expect(typeof result.isValid).toBe('boolean');
        });
      }

      const endMemory = process.memoryUsage().heapUsed;
      const memoryIncrease = endMemory - startMemory;

      // Memory increase should be reasonable (less than 50MB for 1000 iterations)
      expect(memoryIncrease).toBeLessThan(50 * 1024 * 1024);
    });

    it('should handle concurrent validations efficiently', async () => {
      const queries = Array.from({ length: 100 }, (_, i) => `SELECT col${i} FROM table${i}`);

      const startTime = Date.now();
      const promises = queries.map(
        (query) =>
          new Promise<boolean>((resolve) => {
            const result = validateSnowflakeSQL(query);
            resolve(result.isValid);
          })
      );

      const results = await Promise.all(promises);
      const endTime = Date.now();

      expect(results.length).toBe(100);
      results.forEach((result) => expect(typeof result).toBe('boolean'));
      expect(endTime - startTime).toBeLessThan(5000); // 100 concurrent validations should complete in under 5 seconds
    });
  });
});
