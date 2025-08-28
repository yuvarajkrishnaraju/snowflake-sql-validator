# Snowflake SQL Validator

A TypeScript library for validating Snowflake SQL queries. This package provides comprehensive SQL validation using ANTLR4 grammar parsing and custom validation rules.

## Features

- **Syntax Validation**: Uses ANTLR4 grammar to validate SQL syntax
- **Custom Validation Rules**: Extensible validation for Snowflake-specific features
- **TypeScript Support**: Full TypeScript definitions included
- **React Compatible**: Can be imported and used in React applications
- **Error Reporting**: Detailed error information with line and column numbers

## Installation

```bash
npm install snowflake-sql-validator
```

## Usage

### Basic Validation

```typescript
import { validateSnowflakeSQL, isSnowflakeSQLValid } from 'snowflake-sql-validator';

// Validate SQL and get detailed results
const result = validateSnowflakeSQL(`
  SELECT column1, column2 
  FROM table1 
  WHERE column1 > 10
`);

if (result.isValid) {
  console.log('SQL is valid!');
} else {
  console.log('SQL has errors:', result.errors);
}

// Quick validation check
const isValid = isSnowflakeSQLValid('SELECT * FROM table1');
console.log('Is valid:', isValid);
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

### Using in React Components

```typescript
import React, { useState } from 'react';
import { validateSnowflakeSQL } from 'snowflake-sql-validator';

const SQLValidator: React.FC = () => {
  const [sql, setSql] = useState('');
  const [validationResult, setValidationResult] = useState<any>(null);

  const handleValidation = () => {
    const result = validateSnowflakeSQL(sql);
    setValidationResult(result);
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
                    Line {error.line}, Column {error.column}: {error.message}
                  </li>
                ))}
              </ul>
            </div>
          )}
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

## API Reference

### Functions

#### `validateSnowflakeSQL(sql: string): ValidationResult`
Main validation function that returns detailed validation results.

#### `isSnowflakeSQLValid(sql: string): boolean`
Quick validation check that returns a boolean.

#### `getSnowflakeSQLErrors(sql: string): ParseError[]`
Returns an array of parse errors without additional validation.

### Classes

#### `SnowflakeSQL`
Core parser class for Snowflake SQL. Provides methods for parsing, validation, and token extraction.

#### `SnowflakeValidationVisitor`
Visitor class for custom validation rules. Extend this class to add your own validation logic.

### Interfaces

#### `ValidationResult`
```typescript
interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
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

## Important Notes

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

Areas that may need attention:
- ⚠️ ANTLR4 grammar compatibility with complex SQL
- ⚠️ Token recognition for certain SQL patterns

## Development

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
```

### Project Structure

```
src/
├── index.ts                    # Main exports
├── SnowflakeSQL.ts            # Core parser class
├── SnowflakeValidationVisitor.ts # Custom validation visitor
└── parser/snowflake/          # Generated ANTLR4 files
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

## License

ISC

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## Support

For issues and questions, please open an issue on the GitHub repository.

## Troubleshooting

### Common Issues

1. **Import errors in React**: Ensure you're using the correct import syntax for your module system
2. **Parsing failures**: Some complex SQL may not parse correctly with the current grammar
3. **Token recognition errors**: The lexer may have issues with certain character sequences

### Getting Help

- Check the examples in the `examples/` directory
- Review the test files for usage patterns
- Open an issue with specific error messages and SQL examples
