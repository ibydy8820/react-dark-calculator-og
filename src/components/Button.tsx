import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'primary' | 'secondary' | 'danger';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'default',
  className = '' 
}) => {
  const baseStyles = "h-14 rounded-lg font-semibold text-lg transition-all active:scale-95 flex items-center justify-center select-none";
  
  const variants = {
    default: "bg-surface text-white hover:bg-gray-700",
    primary: "bg-primary text-white hover:bg-blue-600",
    secondary: "bg-gray-600 text-white hover:bg-gray-500",
    danger: "bg-red-500/20 text-red-400 hover:bg-red-500/30",
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
};