import React from 'react';
import { Calculator } from './components/Calculator';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-900 p-4">
      <h1 className="text-3xl font-bold text-white mb-8 tracking-tight">
        Dark <span className="text-primary">Calc</span>
      </h1>
      <Calculator />
      <footer className="mt-8 text-gray-500 text-sm">
        Built with React + Tailwind
      </footer>
    </div>
  );
}

export default App;