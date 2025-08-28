import {
  validateSnowflakeSQL,
  isSnowflakeSQLValid,
  getSnowflakeSQLErrors,
  SnowflakeSQL
} from 'snowflake-sql-validator';

// Example 1: Basic validation
console.log('=== Basic Validation ===');
const simpleSQL = 'SELECT column1 FROM table1';
const result = validateSnowflakeSQL(simpleSQL);

if (result.isValid) {
  console.log('✅ SQL is valid!');
} else {
  console.log('❌ SQL has errors:');
  result.errors.forEach((error) => {
    console.log(`  Line ${error.line}, Column ${error.column}: ${error.message}`);
  });
}

// Example 2: Quick validation check
console.log('\n=== Quick Validation ===');
const validSQL = 'SELECT * FROM users WHERE age > 18';
const invalidSQL = 'SELECT FROM users WHERE age >';

console.log(`Valid SQL: ${isSnowflakeSQLValid(validSQL)}`);
console.log(`Invalid SQL: ${isSnowflakeSQLValid(invalidSQL)}`);

// Example 3: Get detailed errors
console.log('\n=== Detailed Error Analysis ===');
const complexSQL = `
  SELECT user_id, name, email
  FROM users 
  WHERE age > 18 
  AND status = 'active'
`;

const errors = getSnowflakeSQLErrors(complexSQL);
if (errors.length === 0) {
  console.log('✅ No syntax errors found');
} else {
  console.log('❌ Syntax errors found:');
  errors.forEach((error) => {
    console.log(`  Line ${error.startLine}, Column ${error.startColumn}: ${error.message}`);
  });
}

// Example 4: Using the SnowflakeSQL class directly
console.log('\n=== Direct Class Usage ===');
const parser = new SnowflakeSQL();

// Parse and validate
const parseResult = parser.parse('SELECT id, name FROM customers');
console.log(`Parse successful: ${parseResult.errors.length === 0}`);

// Check validity
const isValid = parser.isValid('SELECT * FROM products WHERE price > 100');
console.log(`Is valid: ${isValid}`);

// Get tokens
const tokens = parser.getTokens('SELECT * FROM orders');
console.log(`Number of tokens: ${tokens.length}`);

// Example 5: Error handling
console.log('\n=== Error Handling ===');
try {
  const malformedSQL = 'SELECT FROM WHERE GROUP BY';
  const validationResult = validateSnowflakeSQL(malformedSQL);

  if (!validationResult.isValid) {
    console.log('❌ SQL validation failed:');
    validationResult.errors.forEach((error, index) => {
      console.log(`  Error ${index + 1}: Line ${error.line}, Column ${error.column}`);
      console.log(`    Message: ${error.message}`);
    });
  }
} catch (error) {
  console.error('❌ Unexpected error during validation:', error);
}

// Example 6: Batch validation
console.log('\n=== Batch Validation ===');
const sqlQueries = [
  'SELECT * FROM table1',
  'SELECT column1 FROM table2 WHERE id > 100',
  'SELECT FROM table3', // Invalid
  'INSERT INTO table4 (col1) VALUES (1)',
  'UPDATE table5 SET col1 = 10 WHERE id = 1'
];

console.log('Batch validation results:');
sqlQueries.forEach((sql, index) => {
  const isValid = isSnowflakeSQLValid(sql);
  const status = isValid ? '✅' : '❌';
  console.log(`  ${status} Query ${index + 1}: ${isValid ? 'Valid' : 'Invalid'}`);
});

// Example 7: Custom validation logic
console.log('\n=== Custom Validation ===');
function validateSQLWithCustomRules(sql: string) {
  // First, check basic syntax
  const syntaxResult = validateSnowflakeSQL(sql);

  if (!syntaxResult.isValid) {
    return {
      isValid: false,
      errors: syntaxResult.errors,
      type: 'syntax_error'
    };
  }

  // Add custom business rules
  const customErrors: Array<{ line: number; column: number; message: string }> = [];

  // Check for SELECT * (discourage in production)
  if (sql.includes('SELECT *')) {
    customErrors.push({
      line: 1,
      column: 1,
      message: 'Warning: SELECT * is discouraged in production environments'
    });
  }

  // Check for potential performance issues
  if (sql.includes('WHERE 1=1')) {
    customErrors.push({
      line: 1,
      column: 1,
      message: 'Warning: WHERE 1=1 condition detected'
    });
  }

  return {
    isValid: customErrors.length === 0,
    errors: customErrors,
    type: 'custom_validation',
    syntaxValid: true
  };
}

const customValidationResult = validateSQLWithCustomRules('SELECT * FROM users WHERE 1=1');
console.log('Custom validation result:', customValidationResult);
