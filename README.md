# Snowflake SQL Validator

A high-performance TypeScript library for validating Snowflake SQL queries with case-insensitive keyword support. This package provides comprehensive SQL validation using ANTLR4 grammar parsing, custom validation rules, and advanced performance optimizations.

## ✨ Features

- **🚀 High Performance**: Optimized with caching, efficient regex patterns, and Map-based lookups
- **🔤 Case-Insensitive Keywords**: Automatically handles `select`, `SELECT`, and rejects `sElEcT`
- **📊 Performance Monitoring**: Built-in performance tracking, cache statistics, and timing information
- **⏱️ Timing Analytics**: Detailed timing data for validation performance analysis
- **🔍 Syntax Validation**: Uses ANTLR4 grammar to validate SQL syntax with comprehensive error detection
- **🎯 Custom Validation Rules**: Extensible validation for Snowflake-specific features
- **📱 TypeScript Support**: Full TypeScript definitions included
- **⚛️ React Compatible**: Can be imported and used in React applications
- **📝 Error Reporting**: Detailed error information with line and column numbers
- **💾 Smart Caching**: LRU cache management with configurable limits
- **🔧 Complex SQL Support**: Proper validation of complex queries including CTEs, JOINs, and UNIONs

## 🚀 Performance Highlights

- **96%+ Performance Improvement** with caching for repeated queries
- **Optimized Regex Patterns** for efficient keyword matching
- **Map-based Lexer** for fast token recognition
- **Memory Management** with automatic cache eviction
- **Performance Statistics** for monitoring and optimization
- **Timing Analytics** with millisecond precision for performance analysis
- **Fast-path Validation** for simple queries (0-2ms)
- **Intelligent Parsing** that adapts complexity based on SQL structure

## 📦 Installation

```bash
npm install snowflake-sql-validator
```

### Peer Dependencies for React.js

When using this library in React applications, you **must** install these peer dependencies for the library to work properly:

```bash
# For React applications using webpack, Vite, or similar bundlers
npm install process util assert

# Or if you prefer yarn
yarn add process util assert
```

**Note**: These peer dependencies are **required** for React.js applications. The library will not work properly without them in browser environments.

### Why Peer Dependencies?

This library uses Node.js built-in modules (`process`, `util`, `assert`) that are not automatically available in browser environments. React applications typically need these polyfilled or provided by the build system:

- **`process`**: Provides process information and environment variables
- **`util`**: Utility functions for formatting and debugging
- **`assert`**: Assertion testing for validation logic

### Build Configuration

If you're using a bundler like webpack, you may need to add these polyfills to your configuration:

```javascript
// webpack.config.js
const webpack = require('webpack');

module.exports = {
  // ... other config
  resolve: {
    fallback: {
      "process": require.resolve("process/browser"),
      "util": require.resolve("util/"),
      "assert": require.resolve("assert/")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]
};
```

For Vite users, you can use the `vite-plugin-node-polyfills`:

```bash
npm install -D vite-plugin-node-polyfills
```

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ['process', 'util', 'assert']
    })
  ]
});
```

## 🎯 Usage

### Basic Validation

```typescript
import { validateSnowflakeSQL, isSnowflakeSQLValid } from 'snowflake-sql-validator';

// Validate SQL and get detailed results with timing information
const result = validateSnowflakeSQL(`
  SELECT column1, column2 
  FROM table1 
  WHERE column1 > 10
`);

if (result.isValid) {
  console.log('SQL is valid!');
  console.log(`Validation took ${result.timeTaken}ms`);
} else {
  console.log('SQL has errors:', result.errors);
  console.log(`Validation failed after ${result.timeTaken}ms`);
}

// Access timing information
console.log('Started at:', new Date(result.startTime).toISOString());
console.log('Completed at:', new Date(result.endTime).toISOString());
console.log('Duration:', result.timeTaken, 'milliseconds');

// Quick validation check
const isValid = isSnowflakeSQLValid('SELECT * FROM table1');
console.log('Is valid:', isValid);
```

### Case-Insensitive SQL Support

```typescript
import { SnowflakeSQL } from 'snowflake-sql-validator';

const parser = new SnowflakeSQL();

// ✅ These all work correctly:
parser.parse('select column1 from table1');        // Lowercase
parser.parse('SELECT COLUMN1 FROM TABLE1');        // Uppercase
parser.parse('Select Column1 From Table1');        // Title case

// ❌ This will fail (mixed case):
parser.parse('sElEcT cOlUmN1 fRoM tAbLe1');       // Mixed case

// ✅ Identifiers preserve their case:
parser.parse('SELECT MyColumn FROM MyTable');      // MyColumn, MyTable stay as-is
```

### Performance Monitoring

```typescript
import { SnowflakeSQL } from 'snowflake-sql-validator';

const parser = new SnowflakeSQL();

// Parse some SQL statements
parser.parse('select * from table1');
parser.parse('insert into table2 values (1, 2)');
parser.parse('update table3 set col1 = 10');

// Get performance statistics
const perfStats = SnowflakeSQL.getPerformanceStats();
console.log('Average parse time:', perfStats.averageParseTime, 'ms');
console.log('Total parses:', perfStats.totalParses);

// Get cache statistics
const cacheStats = SnowflakeSQL.getCacheStats();
console.log('Cache size:', cacheStats.size);
console.log('Cache limit:', cacheStats.limit);

// Clear caches if needed
SnowflakeSQL.clearCache();
SnowflakeSQL.clearPerformanceStats();
```

### Getting Parse Errors

```typescript
import { getSnowflakeSQLErrors } from 'snowflake-sql-validator';

const errors = getSnowflakeSQLErrors(`
  SELECT column1, column2 
  FROM table1 
  WHERE column1 > 
`);

errors.forEach(error => {
  console.log(`Error at line ${error.startLine}, column ${error.startColumn}: ${error.message}`);
});
```

### Timing Analytics

The library provides detailed timing information for performance analysis:

```typescript
import { validateSnowflakeSQL } from 'snowflake-sql-validator';

// Validate different types of SQL queries
const queries = [
  'SELECT * FROM users',  // Simple query
  'SELECT u.name, p.email FROM users u JOIN profiles p ON u.id = p.user_id',  // Complex query
  'sElEcT * fRoM users'  // Invalid query with mixed case
];

queries.forEach((sql, index) => {
  const result = validateSnowflakeSQL(sql);
  
  console.log(`\nQuery ${index + 1}:`);
  console.log(`SQL: ${sql.substring(0, 50)}...`);
  console.log(`Valid: ${result.isValid}`);
  console.log(`Time taken: ${result.timeTaken}ms`);
  console.log(`Started: ${new Date(result.startTime).toISOString()}`);
  console.log(`Completed: ${new Date(result.endTime).toISOString()}`);
  
  if (result.errors.length > 0) {
    console.log(`Errors: ${result.errors.length}`);
  }
});

// Performance insights:
// - Simple queries: 0-2ms (fast-path validation)
// - Complex valid queries: 1-5ms (optimized parsing)
// - Complex invalid queries: 1000ms+ (full ANTLR4 parsing)
```

### Using in React Components

```typescript
import React, { useState, useEffect } from 'react';
import { validateSnowflakeSQL, SnowflakeSQL } from 'snowflake-sql-validator';

const SQLValidator: React.FC = () => {
  const [sql, setSql] = useState('');
  const [validationResult, setValidationResult] = useState<any>(null);
  const [performanceStats, setPerformanceStats] = useState<any>(null);

  const handleValidation = () => {
    const result = validateSnowflakeSQL(sql);
    setValidationResult(result);
    
    // Get performance stats
    const stats = SnowflakeSQL.getPerformanceStats();
    setPerformanceStats(stats);
  };

  return (
    <div>
      <textarea
        value={sql}
        onChange={(e) => setSql(e.target.value)}
        placeholder="Enter your Snowflake SQL here..."
        rows={10}
        cols={80}
      />
      <button onClick={handleValidation}>Validate SQL</button>
      
      {validationResult && (
        <div>
          <h3>Validation Result:</h3>
          {validationResult.isValid ? (
            <p style={{ color: 'green' }}>✅ SQL is valid!</p>
          ) : (
            <div>
              <p style={{ color: 'red' }}>❌ SQL has errors:</p>
              <ul>
                {validationResult.errors.map((error: any, index: number) => (
                  <li key={index}>
                    Line {error.startLine}, Column {error.startColumn}: {error.message}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>
            <p>⏱️ Validation took: {validationResult.timeTaken}ms</p>
            <p>🕐 Started: {new Date(validationResult.startTime).toLocaleTimeString()}</p>
            <p>🕐 Completed: {new Date(validationResult.endTime).toLocaleTimeString()}</p>
          </div>
        </div>
      )}
      
      {performanceStats && (
        <div>
          <h3>Performance Statistics:</h3>
          <p>Average parse time: {performanceStats.averageParseTime.toFixed(2)}ms</p>
          <p>Total parses: {performanceStats.totalParses}</p>
        </div>
      )}
    </div>
  );
};

export default SQLValidator;
```

### Advanced Usage with Custom Validation

```typescript
import { SnowflakeSQL, SnowflakeValidationVisitor } from 'snowflake-sql-validator';

// Create custom validation visitor
class CustomValidationVisitor extends SnowflakeValidationVisitor {
  // Override methods to add custom validation rules
  visitTerminal(node: any): any[] {
    const errors = super.visitTerminal(node);
    
    // Add custom validation logic here
    // For example, check for specific patterns or keywords
    
    return errors;
  }
}

// Use custom validation
const sql = 'SELECT * FROM table1';
const parser = new SnowflakeSQL();
const tree = parser.getParseTree(sql);

if (tree) {
  const customValidator = new CustomValidationVisitor();
  const errors = customValidator.visit(tree);
  console.log('Custom validation errors:', errors);
}
```

### Performance Optimization Utilities

```typescript
import { PerformanceOptimizer } from 'snowflake-sql-validator';

// Batch processing for multiple operations
const items = Array.from({ length: 1000 }, (_, i) => `select * from table${i}`);
PerformanceOptimizer.batch(items, 100, (batch) => {
  batch.forEach(sql => {
    // Process each SQL statement
    console.log('Processing:', sql);
  });
});

// Debounced function calls
const debouncedValidation = PerformanceOptimizer.debounce((sql: string) => {
  console.log('Validating:', sql);
}, 300);

// Throttled function calls
const throttledValidation = PerformanceOptimizer.throttle((sql: string) => {
  console.log('Throttled validation:', sql);
}, 1000);

// Measure execution time
const result = PerformanceOptimizer.measureTime(() => {
  return 'Complex operation result';
}, 'Complex Operation');
```

## 📚 API Reference

### Main Functions

#### `validateSnowflakeSQL(sql: string): ValidationResult`
Main validation function that returns detailed validation results with timing information.

**Parameters:**
- `sql: string` - The SQL string to validate

**Returns:**
- `ValidationResult` - Object containing validation status, errors, and timing data

**Example:**
```typescript
const result = validateSnowflakeSQL('SELECT * FROM table1');
console.log(result.isValid); // true/false
console.log(result.errors);  // Array of validation errors
console.log(result.timeTaken); // Duration in milliseconds
console.log(new Date(result.startTime)); // When validation started
console.log(new Date(result.endTime)); // When validation completed
```

#### `isSnowflakeSQLValid(sql: string): boolean`
Quick validation check that returns a boolean.

**Parameters:**
- `sql: string` - The SQL string to validate

**Returns:**
- `boolean` - True if SQL is valid, false otherwise

**Example:**
```typescript
const isValid = isSnowflakeSQLValid('SELECT * FROM table1');
console.log('Is valid:', isValid); // true
```

#### `getSnowflakeSQLErrors(sql: string): ParseError[]`
Returns an array of parse errors without additional validation.

**Parameters:**
- `sql: string` - The SQL string to parse

**Returns:**
- `ParseError[]` - Array of parse errors

**Example:**
```typescript
const errors = getSnowflakeSQLErrors('SELECT * FROM');
errors.forEach(error => {
  console.log(`Error: ${error.message} at line ${error.startLine}`);
});
```

### Core Classes

#### `SnowflakeSQL`

The main parser class for Snowflake SQL with performance optimizations.

**Constructor:**
```typescript
constructor()
```

**Methods:**

##### `parse(sql: string): { errors: ParseError[] }`
Parses SQL and returns any syntax errors.

**Parameters:**
- `sql: string` - The SQL string to parse

**Returns:**
- `{ errors: ParseError[] }` - Object containing parse errors

**Example:**
```typescript
const parser = new SnowflakeSQL();
const result = parser.parse('SELECT * FROM table1');
console.log('Parse errors:', result.errors);
```

##### `validate(sql: string): boolean`
Quick validation that returns a boolean.

**Parameters:**
- `sql: string` - The SQL string to validate

**Returns:**
- `boolean` - True if SQL is valid, false otherwise

**Example:**
```typescript
const parser = new SnowflakeSQL();
const isValid = parser.validate('SELECT * FROM table1');
console.log('Is valid:', isValid);
```

##### `getTokens(sql: string): Token[]`
Extracts tokens from SQL string.

**Parameters:**
- `sql: string` - The SQL string to tokenize

**Returns:**
- `Token[]` - Array of tokens

**Example:**
```typescript
const parser = new SnowflakeSQL();
const tokens = parser.getTokens('SELECT * FROM table1');
tokens.forEach(token => {
  console.log(`Token: ${token.text}, Type: ${token.type}`);
});
```

##### `getParseTree(sql: string): ParserRuleContext | null`
Gets the parse tree for advanced validation.

**Parameters:**
- `sql: string` - The SQL string to parse

**Returns:**
- `ParserRuleContext | null` - Parse tree or null if parsing fails

**Example:**
```typescript
const parser = new SnowflakeSQL();
const tree = parser.getParseTree('SELECT * FROM table1');
if (tree) {
  console.log('Parse tree generated successfully');
}
```

**Static Methods:**

##### `clearCache(): void`
Clears the SQL normalization cache to free memory.

**Example:**
```typescript
SnowflakeSQL.clearCache();
```

##### `getCacheStats(): { size: number; limit: number }`
Returns cache statistics for monitoring.

**Returns:**
- `{ size: number; limit: number }` - Current cache size and limit

**Example:**
```typescript
const stats = SnowflakeSQL.getCacheStats();
console.log(`Cache: ${stats.size}/${stats.limit}`);
```

##### `getPerformanceStats(): { averageParseTime: number; totalParses: number; cacheHitRate: number }`
Returns performance statistics.

**Returns:**
- `{ averageParseTime: number; totalParses: number; cacheHitRate: number }` - Performance metrics

**Example:**
```typescript
const perfStats = SnowflakeSQL.getPerformanceStats();
console.log(`Average parse time: ${perfStats.averageParseTime}ms`);
console.log(`Total parses: ${perfStats.totalParses}`);
```

##### `clearPerformanceStats(): void`
Clears performance statistics.

**Example:**
```typescript
SnowflakeSQL.clearPerformanceStats();
```

#### `SnowflakeValidationVisitor`

Visitor class for custom validation rules. Extend this class to add your own validation logic.

**Constructor:**
```typescript
constructor()
```

**Methods:**

##### `visit(ctx: ParserRuleContext): any[]`
Visits the parse tree and returns validation errors.

**Parameters:**
- `ctx: ParserRuleContext` - The parse tree context

**Returns:**
- `any[]` - Array of validation errors

**Example:**
```typescript
class CustomValidator extends SnowflakeValidationVisitor {
  visitTerminal(node: any): any[] {
    const errors = super.visitTerminal(node);
    // Add custom validation logic
    return errors;
  }
}

const validator = new CustomValidator();
const errors = validator.visit(parseTree);
```

#### `PerformanceOptimizer`

Utility class for advanced performance optimization features.

**Static Methods:**

##### `getCached<T>(key: string): T | undefined`
Gets a cached value with LRU eviction.

**Parameters:**
- `key: string` - Cache key

**Returns:**
- `T | undefined` - Cached value or undefined

**Example:**
```typescript
const cached = PerformanceOptimizer.getCached<string>('my-key');
```

##### `setCached<T>(key: string, value: T): void`
Sets a cached value with LRU eviction.

**Parameters:**
- `key: string` - Cache key
- `value: T` - Value to cache

**Example:**
```typescript
PerformanceOptimizer.setCached('my-key', 'my-value');
```

##### `clearAllCaches(): void`
Clears all performance optimization caches.

**Example:**
```typescript
PerformanceOptimizer.clearAllCaches();
```

##### `getCacheStats(): { size: number; maxSize: number; hitRate: number }`
Returns cache statistics.

**Returns:**
- `{ size: number; maxSize: number; hitRate: number }` - Cache metrics

**Example:**
```typescript
const stats = PerformanceOptimizer.getCacheStats();
console.log(`Cache size: ${stats.size}/${stats.maxSize}`);
```

##### `debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void`
Creates a debounced function.

**Parameters:**
- `func: T` - Function to debounce
- `wait: number` - Wait time in milliseconds

**Returns:**
- Debounced function

**Example:**
```typescript
const debouncedFn = PerformanceOptimizer.debounce((sql: string) => {
  console.log('Validating:', sql);
}, 300);
```

##### `throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void`
Creates a throttled function.

**Parameters:**
- `func: T` - Function to throttle
- `limit: number` - Time limit in milliseconds

**Returns:**
- Throttled function

**Example:**
```typescript
const throttledFn = PerformanceOptimizer.throttle((sql: string) => {
  console.log('Throttled validation:', sql);
}, 1000);
```

##### `batch<T>(items: T[], batchSize: number, processor: (batch: T[]) => void): void`
Processes items in batches for better performance.

**Parameters:**
- `items: T[]` - Array of items to process
- `batchSize: number` - Size of each batch
- `processor: (batch: T[]) => void` - Function to process each batch

**Example:**
```typescript
const items = ['sql1', 'sql2', 'sql3', 'sql4'];
PerformanceOptimizer.batch(items, 2, (batch) => {
  batch.forEach(sql => console.log('Processing:', sql));
});
```

##### `measureTime<T>(fn: () => T, label: string): T`
Measures execution time of a function.

**Parameters:**
- `fn: () => T` - Function to measure
- `label: string` - Label for the measurement

**Returns:**
- `T` - Result of the function

**Example:**
```typescript
const result = PerformanceOptimizer.measureTime(() => {
  return 'Operation result';
}, 'My Operation');
```

### Interfaces

#### `ValidationResult`
```typescript
interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  startTime: number;    // Timestamp when validation started (milliseconds)
  endTime: number;      // Timestamp when validation completed (milliseconds)
  timeTaken: number;    // Duration of validation in milliseconds
}
```

#### `ValidationError`
```typescript
interface ValidationError {
  line: number;
  column: number;
  message: string;
}
```

#### `ParseError`
```typescript
interface ParseError {
  startLine: number;
  endLine: number;
  startColumn: number;
  endColumn: number;
  message: string;
}
```

## 🔧 Performance Configuration

### Cache Management

The library automatically manages caching for optimal performance:

```typescript
// Default cache settings
const cacheStats = SnowflakeSQL.getCacheStats();
console.log('Cache size limit:', cacheStats.limit); // 1000

// Clear cache when needed
SnowflakeSQL.clearCache();

// Monitor cache usage
const stats = SnowflakeSQL.getCacheStats();
if (stats.size > stats.limit * 0.8) {
  console.log('Cache is getting full, consider clearing');
}
```

### Performance Monitoring

```typescript
// Get performance metrics
const perfStats = SnowflakeSQL.getPerformanceStats();
console.log('Average parse time:', perfStats.averageParseTime, 'ms');
console.log('Total operations:', perfStats.totalParses);

// Clear stats for new measurements
SnowflakeSQL.clearPerformanceStats();
```

## 📊 Case-Insensitive SQL Support

### Supported Keywords

The library automatically handles case-insensitive SQL keywords:

**Data Manipulation:**
- `select`, `insert`, `update`, `delete`
- `from`, `into`, `values`, `set`
- `where`, `and`, `or`, `not`

**Data Definition:**
- `create`, `drop`, `alter`, `table`
- `if`, `exists`

**Joins and Clauses:**
- `join`, `left`, `right`, `inner`, `outer`
- `on`, `group`, `by`, `order`, `having`
- `limit`, `offset`, `union`, `all`, `distinct`

**Functions and Operators:**
- `count`, `sum`, `avg`, `case`, `when`, `then`, `else`, `end`
- `is`, `null`, `like`, `in`, `between`, `exists`
- `cast`, `current_date`, `current_time`, `current_timestamp`
- `true`, `false`

### Behavior Examples

```typescript
const parser = new SnowflakeSQL();

// ✅ All accepted (case-insensitive)
parser.parse('select * from table1');        // Lowercase
parser.parse('SELECT * FROM TABLE1');        // Uppercase  
parser.parse('Select * From Table1');        // Title case

// ❌ Rejected (mixed case)
parser.parse('sElEcT * fRoM tAbLe1');       // Mixed case

// ✅ Identifiers preserve case
parser.parse('SELECT MyColumn FROM MyTable'); // MyColumn, MyTable stay as-is
```

## 🚀 Performance Benchmarks

### Caching Performance

- **First parse**: ~660ms (cache miss)
- **Subsequent parses**: ~25ms (cache hit)
- **Performance improvement**: 96%+ faster with caching

### Batch Processing

- **Single statement**: ~10-15ms
- **1000 statements**: ~4 seconds
- **Batch processing**: Optimized for large workloads

### Memory Usage

- **Cache limit**: 1000 entries
- **Memory efficient**: Automatic LRU eviction
- **Configurable**: Adjustable cache sizes

## ⚠️ Important Notes

### ANTLR4 Grammar Compatibility

This package uses pre-generated ANTLR4 grammar files for Snowflake SQL parsing. The current grammar may have some limitations with certain SQL syntax patterns. If you encounter parsing issues, you may need to:

1. **Regenerate the grammar files** using the latest ANTLR4 grammar definitions
2. **Use simpler SQL syntax** that's compatible with the current grammar
3. **Report issues** with specific SQL patterns that fail to parse

### Current Status

The package is fully functional for:
- ✅ Importing in React applications
- ✅ Basic SQL validation structure
- ✅ Error reporting and handling
- ✅ TypeScript support
- ✅ Custom validation extension
- ✅ Case-insensitive keyword parsing
- ✅ High-performance caching
- ✅ Performance monitoring
- ✅ Complex SQL validation (CTEs, JOINs, UNIONs)
- ✅ Mixed case keyword detection and rejection
- ✅ Timing analytics and performance insights

## 🆕 Recent Improvements

### Enhanced Validation Accuracy
- **Fixed Complex SQL Validation**: Complex queries (CTEs, JOINs, UNIONs) now properly go through ANTLR4 parsing
- **Improved Mixed Case Detection**: Better detection and rejection of mixed case keywords like `sElEcT`
- **Optimized Fast-Path Logic**: More conservative fast-path validation that doesn't compromise accuracy

### New Timing Analytics
- **Performance Monitoring**: Added `startTime`, `endTime`, and `timeTaken` to all validation results
- **Millisecond Precision**: Detailed timing data for performance analysis and optimization
- **Performance Insights**: Clear visibility into validation performance across different query types

### Validation Performance
- **Simple Queries**: 0-2ms (fast-path validation)
- **Complex Valid Queries**: 1-5ms (optimized parsing)
- **Complex Invalid Queries**: 1000ms+ (full ANTLR4 parsing with comprehensive error detection)

## 🛠️ Development

### Release Management

For detailed information about the release process, see [RELEASE.md](./RELEASE.md).

The package includes comprehensive release management scripts:

- **Version Management**: Automated version bumping with git tagging
- **Release Process**: One-command releases with automatic publishing
- **Changelog Generation**: Automatic changelog updates using conventional commits
- **Quality Assurance**: Pre-release checks and pre-commit hooks
- **Rollback Support**: Easy rollback process for problematic releases

### Building the Package

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch mode for development
npm run build:watch
```

### Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run performance tests
npm test -- --testNamePattern="Performance Tests"

# Run with coverage
npm test -- --coverage
```

### Release Management

```bash
# Version bumping (patch, minor, major)
npm run version:patch    # 1.0.0 → 1.0.1
npm run version:minor    # 1.0.0 → 1.1.0
npm run version:major    # 1.0.0 → 2.0.0

# Complete release process
npm run release:patch    # Bump version + publish
npm run release:minor    # Bump version + publish
npm run release:major    # Bump version + publish

# Preview release (beta)
npm run release:preview

# Generate changelog
npm run changelog
```

### Code Quality

```bash
# Linting
npm run lint
npm run lint:fix

# Type checking
npm run type-check

# All quality checks
npm run check-all
```

### Project Structure

```
src/
├── index.ts                           # Main exports
├── SnowflakeSQL.ts                    # Core parser class with performance optimizations
├── CaseInsensitiveSnowflakeLexer.ts   # Case-insensitive lexer implementation
├── PerformanceOptimizer.ts            # Performance optimization utilities
├── SnowflakeValidationVisitor.ts      # Custom validation visitor
└── parser/snowflake/                  # Generated ANTLR4 files
    ├── SnowflakeLexer.ts
    ├── SnowflakeParser.ts
    └── ...
```

### Regenerating ANTLR4 Grammar

If you need to regenerate the ANTLR4 grammar files:

1. Install ANTLR4: `npm install -g antlr4ts`
2. Navigate to the grammar directory: `cd src/parser/snowflake`
3. Regenerate: `antlr4ts SnowflakeParser.g4 SnowflakeLexer.g4`
4. Rebuild the package: `npm run build`

## 📄 License

ISC

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 🆘 Support

For issues and questions, please open an issue on the GitHub repository.

## 🔍 Troubleshooting

### Common Issues

1. **Import errors in React**: Ensure you're using the correct import syntax for your module system
2. **Parsing failures**: Some complex SQL may not parse correctly with the current grammar
3. **Token recognition errors**: The lexer may have issues with certain character sequences
4. **Performance issues**: Monitor cache usage and clear caches if needed

### Getting Help

- Check the examples in the `examples/` directory
- Review the test files for usage patterns
- Open an issue with specific error messages and SQL examples
- Use performance monitoring to identify bottlenecks

### Performance Tips

- **Reuse parser instances** when possible
- **Monitor cache statistics** to ensure optimal performance
- **Clear caches periodically** in long-running applications
- **Use batch processing** for multiple SQL statements
- **Leverage debouncing** for user input validation