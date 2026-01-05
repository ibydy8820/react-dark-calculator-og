export type Operator = '+' | '-' | '*' | '/' | null;

export interface CalculatorState {
  currentValue: string;
  previousValue: string | null;
  operator: Operator;
  overwrite: boolean;
}