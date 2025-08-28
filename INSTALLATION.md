# Installation and Setup Guide

## Quick Start

### 1. Install the Package

```bash
npm install snowflake-sql-validator
```

### 2. Import and Use

```typescript
import { validateSnowflakeSQL } from 'snowflake-sql-validator';

const result = validateSnowflakeSQL('SELECT * FROM users');
console.log(result.isValid ? 'Valid SQL' : 'Invalid SQL');
```

## React Application Setup

### 1. Create a New React App (if needed)

```bash
npx create-react-app my-sql-app --template typescript
cd my-sql-app
```

### 2. Install Dependencies

```bash
npm install snowflake-sql-validator
```

### 3. Create a SQL Validator Component

```typescript
// src/components/SQLValidator.tsx
import React, { useState } from 'react';
import { validateSnowflakeSQL } from 'snowflake-sql-validator';

const SQLValidator: React.FC = () => {
  const [sql, setSql] = useState('');
  const [result, setResult] = useState<any>(null);

  const handleValidate = () => {
    const validationResult = validateSnowflakeSQL(sql);
    setResult(validationResult);
  };

  return (
    <div>
      <textarea
        value={sql}
        onChange={(e) => setSql(e.target.value)}
        placeholder="Enter SQL here..."
        rows={5}
        cols={50}
      />
      <button onClick={handleValidate}>Validate</button>
      
      {result && (
        <div>
          {result.isValid ? (
            <p style={{ color: 'green' }}>✅ Valid SQL</p>
          ) : (
            <div>
              <p style={{ color: 'red' }}>❌ Invalid SQL</p>
              <ul>
                {result.errors.map((error: any, index: number) => (
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

### 4. Use in Your App

```typescript
// src/App.tsx
import React from 'react';
import SQLValidator from './components/SQLValidator';

function App() {
  return (
    <div className="App">
      <h1>SQL Validator</h1>
      <SQLValidator />
    </div>
  );
}

export default App;
```

## Node.js/TypeScript Setup

### 1. Initialize Project

```bash
mkdir my-sql-project
cd my-sql-project
npm init -y
npm install typescript ts-node @types/node
npm install snowflake-sql-validator
```

### 2. Create tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "node",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 3. Create Source File

```typescript
// src/index.ts
import { validateSnowflakeSQL, isSnowflakeSQLValid } from 'snowflake-sql-validator';

// Test some SQL
const testQueries = [
  'SELECT * FROM users',
  'SELECT FROM users', // Invalid
  'SELECT id, name FROM customers WHERE active = true'
];

testQueries.forEach((sql, index) => {
  console.log(`\nQuery ${index + 1}: ${sql}`);
  
  const result = validateSnowflakeSQL(sql);
  if (result.isValid) {
    console.log('✅ Valid SQL');
  } else {
    console.log('❌ Invalid SQL:');
    result.errors.forEach(error => {
      console.log(`  Line ${error.line}, Column ${error.column}: ${error.message}`);
    });
  }
});
```

### 4. Run the Application

```bash
npx ts-node src/index.ts
```

## Package.json Examples

### React App (package.json)

```json
{
  "name": "my-react-sql-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "snowflake-sql-validator": "^1.0.0",
    "typescript": "^4.9.5"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

### Node.js App (package.json)

```json
{
  "name": "my-sql-validator-app",
  "version": "1.0.0",
  "description": "SQL validation application",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts"
  },
  "dependencies": {
    "snowflake-sql-validator": "^1.0.0"
  },
  "devDependencies": {
    "@types/node": "^18.0.0",
    "typescript": "^4.9.5",
    "ts-node": "^10.9.1"
  }
}
```

## Troubleshooting

### Common Issues

1. **Module not found errors**
   - Ensure the package is installed: `npm install snowflake-sql-validator`
   - Check your import path is correct

2. **TypeScript compilation errors**
   - Verify your tsconfig.json includes the node_modules types
   - Make sure you have @types/node installed

3. **Import/export issues**
   - Use CommonJS require syntax: `const { validateSnowflakeSQL } = require('snowflake-sql-validator')`
   - Or ES6 import syntax: `import { validateSnowflakeSQL } from 'snowflake-sql-validator'`

4. **Parsing errors**
   - Some complex SQL may not parse correctly with the current grammar
   - Try simpler SQL statements first
   - Check the error messages for specific issues

### Getting Help

- Check the examples in the `examples/` directory
- Review the main README.md for API documentation
- Open an issue with specific error messages and SQL examples

## Next Steps

After setting up the basic installation:

1. **Explore the API**: Try different validation functions
2. **Custom validation**: Extend the SnowflakeValidationVisitor class
3. **Error handling**: Implement robust error handling for your use case
4. **Integration**: Integrate with your existing SQL editor or form validation
