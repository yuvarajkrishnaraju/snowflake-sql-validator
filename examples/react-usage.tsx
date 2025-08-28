import React, { useState } from 'react';
import { validateSnowflakeSQL, isSnowflakeSQLValid, getSnowflakeSQLErrors } from 'snowflake-sql-validator';

interface ValidationResult {
  isValid: boolean;
  errors: Array<{
    line: number;
    column: number;
    message: string;
  }>;
}

const SnowflakeSQLValidator: React.FC = () => {
  const [sql, setSql] = useState('');
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [quickValidation, setQuickValidation] = useState<boolean | null>(null);

  const handleValidation = () => {
    if (!sql.trim()) {
      setValidationResult(null);
      setQuickValidation(null);
      return;
    }

    // Full validation with detailed results
    const result = validateSnowflakeSQL(sql);
    setValidationResult(result);

    // Quick validation check
    const isValid = isSnowflakeSQLValid(sql);
    setQuickValidation(isValid);
  };

  const handleQuickValidation = () => {
    if (!sql.trim()) {
      setQuickValidation(null);
      return;
    }

    const isValid = isSnowflakeSQLValid(sql);
    setQuickValidation(isValid);
  };

  const handleGetErrors = () => {
    if (!sql.trim()) {
      setValidationResult(null);
      return;
    }

    const errors = getSnowflakeSQLErrors(sql);
    setValidationResult({
      isValid: errors.length === 0,
      errors: errors.map(err => ({
        line: err.startLine,
        column: err.startColumn,
        message: err.message
      }))
    });
  };

  return (
    <div className="snowflake-sql-validator" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>
        Snowflake SQL Validator
      </h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="sql-input" style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
          Enter your Snowflake SQL:
        </label>
        <textarea
          id="sql-input"
          value={sql}
          onChange={(e) => setSql(e.target.value)}
          placeholder="SELECT column1 FROM table1 WHERE column1 > 10"
          rows={8}
          cols={80}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={handleValidation}
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            marginRight: '10px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Validate SQL
        </button>
        
        <button
          onClick={handleQuickValidation}
          style={{
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            marginRight: '10px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Quick Check
        </button>
        
        <button
          onClick={handleGetErrors}
          style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Get Errors
        </button>
      </div>

      {/* Quick Validation Result */}
      {quickValidation !== null && (
        <div style={{ marginBottom: '20px' }}>
          <h3>Quick Validation Result:</h3>
          <div style={{
            padding: '10px',
            borderRadius: '4px',
            backgroundColor: quickValidation ? '#d5f4e6' : '#fadbd8',
            color: quickValidation ? '#27ae60' : '#e74c3c',
            fontWeight: 'bold'
          }}>
            {quickValidation ? '✅ SQL is valid!' : '❌ SQL has errors'}
          </div>
        </div>
      )}

      {/* Detailed Validation Result */}
      {validationResult && (
        <div>
          <h3>Detailed Validation Result:</h3>
          {validationResult.isValid ? (
            <div style={{
              padding: '15px',
              borderRadius: '4px',
              backgroundColor: '#d5f4e6',
              color: '#27ae60',
              border: '1px solid #27ae60'
            }}>
              <strong>✅ SQL is valid!</strong>
              <p>No syntax errors found.</p>
            </div>
          ) : (
            <div style={{
              padding: '15px',
              borderRadius: '4px',
              backgroundColor: '#fadbd8',
              color: '#e74c3c',
              border: '1px solid #e74c3c'
            }}>
              <strong>❌ SQL has errors:</strong>
              <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                {validationResult.errors.map((error, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>
                    <strong>Line {error.line}, Column {error.column}:</strong> {error.message}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Example SQL Queries */}
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <h3>Example SQL Queries to Test:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h4>Valid SQL:</h4>
            <ul style={{ fontSize: '14px' }}>
              <li><code>SELECT * FROM table1</code></li>
              <li><code>SELECT column1, column2 FROM table1 WHERE column1 > 10</code></li>
              <li><code>INSERT INTO table1 (col1, col2) VALUES (1, 'test')</code></li>
            </ul>
          </div>
          <div>
            <h4>Invalid SQL:</h4>
            <ul style={{ fontSize: '14px' }}>
              <li><code>SELECT FROM table1</code></li>
              <li><code>SELECT * FROM WHERE column1 > 10</code></li>
              <li><code>INSERT table1 VALUES (1, 'test')</code></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnowflakeSQLValidator;
