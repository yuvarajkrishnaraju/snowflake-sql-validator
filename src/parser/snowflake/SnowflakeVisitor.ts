import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

export class SnowflakeVisitor<Result> extends AbstractParseTreeVisitor<Result> {
  protected defaultResult(): Result {
    // You might need to adjust this based on what 'Result' is expected to be
    // For our ValidationError[], an empty array is a reasonable default.
    return [] as any;
  }

  visitTerminal(node: TerminalNode): Result {
    return this.defaultResult();
  }

  // Other generated methods would go here
}
