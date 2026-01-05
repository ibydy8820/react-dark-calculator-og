import React from 'react';

interface DisplayProps {
  value: string;
  previousValue: string | null;
  operator: string | null;
}

export const Display: React.FC<DisplayProps> = ({ value, previousValue, operator }) => {
  // Format number for better readability
  const formatNumber = (num: string) => {
    if (!num) return '';
    const [integer, decimal] = num.split('.');
    if (decimal === undefined) {
      return new Intl.NumberFormat('en-US').format(Number(integer));
    }
    return `${new Intl.NumberFormat('en-US').format(Number(integer))}.${decimal}`;
  };

  return (
    <div className="w-full bg-display p-4 rounded-xl mb-4 flex flex-col items-end justify-end h-32 break-all">
      <div className="text-gray-400 text-sm h-6">
        {previousValue && `${formatNumber(previousValue)} ${operator || ''}`}
      </div>
      <div className="text-white text-4xl font-bold tracking-wider">
        {formatNumber(value)}
      </div>
    </div>
  );
};