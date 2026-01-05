import React from 'react';
import { useCalculator } from '../hooks/useCalculator';
import { Display } from './Display';
import { Button } from './Button';

export const Calculator: React.FC = () => {
  const { state, inputDigit, clear, deleteLast, setOperation, evaluate } = useCalculator();

  return (
    <div className="w-full max-w-sm bg-background p-6 rounded-3xl shadow-2xl border border-gray-800">
      <Display 
        value={state.currentValue} 
        previousValue={state.previousValue}
        operator={state.operator}
      />
      
      <div className="grid grid-cols-4 gap-3">
        {/* Row 1 */}
        <Button label="AC" onClick={clear} variant="danger" />
        <Button label="DEL" onClick={deleteLast} variant="secondary" />
        <Button label="%" onClick={() => {}} variant="secondary" className="opacity-50 cursor-not-allowed" /> {/* Placeholder */}
        <Button label="÷" onClick={() => setOperation('/')} variant="primary" />

        {/* Row 2 */}
        <Button label="7" onClick={() => inputDigit('7')} />
        <Button label="8" onClick={() => inputDigit('8')} />
        <Button label="9" onClick={() => inputDigit('9')} />
        <Button label="×" onClick={() => setOperation('*')} variant="primary" />

        {/* Row 3 */}
        <Button label="4" onClick={() => inputDigit('4')} />
        <Button label="5" onClick={() => inputDigit('5')} />
        <Button label="6" onClick={() => inputDigit('6')} />
        <Button label="-" onClick={() => setOperation('-')} variant="primary" />

        {/* Row 4 */}
        <Button label="1" onClick={() => inputDigit('1')} />
        <Button label="2" onClick={() => inputDigit('2')} />
        <Button label="3" onClick={() => inputDigit('3')} />
        <Button label="+" onClick={() => setOperation('+')} variant="primary" />

        {/* Row 5 */}
        <Button label="0" onClick={() => inputDigit('0')} className="col-span-2" />
        <Button label="." onClick={() => inputDigit('.')} />
        <Button label="=" onClick={evaluate} variant="primary" />
      </div>
    </div>
  );
};