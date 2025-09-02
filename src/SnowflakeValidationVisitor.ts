import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

// Placeholder imports for generated ANTLR4 files
import { SnowflakeVisitor } from './parser/snowflake/SnowflakeVisitor';
import { ParseError } from './SnowflakeSQL';

export interface ValidationError extends ParseError {
  severity: 'error' | 'warning' | 'info';
  suggestions: string[];
}

export class SnowflakeValidationVisitor extends SnowflakeVisitor<ValidationError[]> {
  private errors: ValidationError[] = [];

  constructor() {
    super();
    this.errors = [];
  }

  // Override the visit method to start the traversal
  public visit(tree: ParseTree): ValidationError[] {
    this.errors = [];
    if (tree) {
      super.visit(tree);
    }
    return this.errors;
  }

  // Example: Validate JSON path access (e.g., MEMBER:guid::string)
  // This would require identifying specific rule contexts related to expressions or identifiers
  // For demonstration, let's assume a rule context `jsonAccessExpression` exists.
  // In a real grammar, you'd target specific rule contexts for identifiers or expressions.
  public visitTerminal(node: TerminalNode): ValidationError[] {
    // This is a very simplistic check. In a real scenario, you would analyze the context of the terminal node.
    const text = node.text;

    // Check for mixed-case SQL keywords (e.g., sElEcT, fRoM)
    const sqlKeywords = [
      'SELECT', 'FROM', 'WHERE', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'DROP', 'ALTER',
      'AS', 'AND', 'OR', 'INTO', 'VALUES', 'SET', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER',
      'ON', 'GROUP', 'BY', 'ORDER', 'HAVING', 'LIMIT', 'OFFSET', 'UNION', 'ALL', 'DISTINCT',
      'COUNT', 'SUM', 'AVG', 'CASE', 'WHEN', 'THEN', 'ELSE', 'END', 'IS', 'NULL', 'NOT',
      'LIKE', 'IN', 'BETWEEN', 'EXISTS', 'CAST', 'CURRENT_DATE', 'CURRENT_TIME', 'CURRENT_TIMESTAMP',
      'TRUE', 'FALSE'
    ];

    const upperText = text.toUpperCase();
    const isKeyword = sqlKeywords.includes(upperText);
    
    if (isKeyword) {
      const isLowerCase = text === text.toLowerCase();
      const isUpperCase = text === text.toUpperCase();
      
      if (!isLowerCase && !isUpperCase) {
        // Mixed case keyword detected
        const symbol = node.symbol;
        this.errors.push({
          startLine: symbol.line,
          endLine: symbol.line,
          startColumn: symbol.charPositionInLine,
          endColumn: symbol.charPositionInLine + text.length - 1,
          message: `Mixed case SQL keyword not allowed: '${text}'. Use either lowercase (${text.toLowerCase()}) or uppercase (${text.toUpperCase()}).`,
          severity: 'error',
          suggestions: [
            `Use '${text.toLowerCase()}' for lowercase`,
            `Use '${text.toUpperCase()}' for uppercase`
          ]
        });
      }
    }

    // Example: Check for `::string` or `::variant` like casts after an identifier, typical in Snowflake JSON access
    if (/(?<!::)\b\w+::(string|variant|int|float|boolean)\b/i.test(text)) {
      // This is a basic regex. A proper check would involve checking the parse tree structure.
      // For instance, checking if it's an identifier followed by a double colon and a type.
      // For now, let's just flag it if it matches the pattern.
      const symbol = node.symbol;
      this.errors.push({
        startLine: symbol.line,
        endLine: symbol.line,
        startColumn: symbol.charPositionInLine,
        endColumn: symbol.charPositionInLine,
        message: `Potentially invalid or unrecognized cast syntax: '${text}'. Ensure correct Snowflake JSON path access (e.g., OBJECT:field::TYPE).`,
        severity: 'warning',
        suggestions: ['Review the JSON path syntax for this identifier.']
      });
    }
    return super.visitTerminal(node);
  }

  // Example: Validate INSERT INTO ... SELECT column count matching
  // This requires visiting both the insert statement and the select statement,
  // and then comparing the number of columns. This is a complex operation that
  // often requires state management within the visitor or a separate pass.
  // For conceptual purposes, we'll outline the idea.

  // public visitInsertStatement(ctx: InsertStatementContext): ValidationError[] {
  //     const insertColumns = ctx.columnList()?.identifier().length || 0;
  //     const selectStatement = ctx.selectStatement();
  //     // Traverse selectStatement to count selected columns
  //     // const selectColumns = this.countSelectColumns(selectStatement);

  //     // if (insertColumns > 0 && selectColumns > 0 && insertColumns !== selectColumns) {
  //     //     this.errors.push({
  //     //         line: ctx.start.line,
  //     //         column: ctx.start.charPositionInLine,
  //     //         message: `Column count mismatch between INSERT and SELECT. Expected ${insertColumns}, got ${selectColumns}.`,
  //     //     });
  //     // }
  //     return super.visitInsertStatement(ctx);
  // }

  // This method would be part of the visitor to count columns in a select statement
  // private countSelectColumns(selectCtx: SelectStatementContext): number {
  //     // ... logic to count columns from SELECT, including handling of '*' and expressions
  //     return 0;
  // }

  // Add more validation rules as needed for Snowflake-specific features:
  // - Usage of DATEADD, current_timestamp()
  // - Proper syntax for UDFs/Stored Procedures
  // - VALIDATE function usage
  // - Semi-structured data functions (PARSE_JSON, GET etc.)
}
