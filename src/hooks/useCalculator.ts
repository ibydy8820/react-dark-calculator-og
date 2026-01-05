import { useState } from 'react';
import { CalculatorState, Operator } from '../types/calculator';

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>({
    currentValue: '0',
    previousValue: null,
    operator: null,
    overwrite: false,
  });

  const inputDigit = (digit: string) => {
    setState((prev) => {
      if (prev.overwrite) {
        return {
          ...prev,
          currentValue: digit,
          overwrite: false,
        };
      }
      if (digit === '0' && prev.currentValue === '0') return prev;
      if (digit === '.' && prev.currentValue.includes('.')) return prev;
      
      return {
        ...prev,
        currentValue: prev.currentValue === '0' && digit !== '.' 
          ? digit 
          : prev.currentValue + digit,
      };
    });
  };

  const clear = () => {
    setState({
      currentValue: '0',
      previousValue: null,
      operator: null,
      overwrite: false,
    });
  };

  const deleteLast = () => {
    setState((prev) => {
      if (prev.overwrite) {
        return {
          ...prev,
          currentValue: '0',
          overwrite: false,
        };
      }
      if (prev.currentValue.length === 1) {
        return { ...prev, currentValue: '0' };
      }
      return { ...prev, currentValue: prev.currentValue.slice(0, -1) };
    });
  };

  const setOperation = (op: Operator) => {
    setState((prev) => {
      if (prev.operator && !prev.overwrite) {
        // Calculate intermediate result if needed
        const result = calculateResult(prev);
        return {
          currentValue: String(result),
          previousValue: String(result),
          operator: op,
          overwrite: true,
        };
      }
      return {
        ...prev,
        operator: op,
        previousValue: prev.currentValue,
        overwrite: true,
      };
    });
  };

  const calculateResult = (state: CalculatorState): number => {
    const current = parseFloat(state.currentValue);
    const prev = parseFloat(state.previousValue || '0');
    
    if (isNaN(current) || isNaN(prev)) return 0;

    switch (state.operator) {
      case '+': return prev + current;
      case '-': return prev - current;
      case '*': return prev * current;
      case '/': return current === 0 ? 0 : prev / current;
      default: return current;
    }
  };

  const evaluate = () => {
    setState((prev) => {
      if (!prev.operator || !prev.previousValue) return prev;
      
      const result = calculateResult(prev);
      
      return {
        currentValue: String(result),
        previousValue: null,
        operator: null,
        overwrite: true,
      };
    });
  };

  return {
    state,
    inputDigit,
    clear,
    deleteLast,
    setOperation,
    evaluate,
  };
};