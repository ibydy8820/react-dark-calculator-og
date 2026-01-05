import { useState } from 'react'

function App() {
  const [current, setCurrent] = useState('')
  const [previous, setPrevious] = useState('')
  const [operation, setOperation] = useState(null)

  // Добавление цифры
  const appendNumber = (number) => {
    if (number === '.' && current.includes('.')) return
    setCurrent(current.toString() + number.toString())
  }

  // Выбор операции
  const chooseOperation = (op) => {
    if (current === '') return
    if (previous !== '') {
      compute()
    }
    setOperation(op)
    setPrevious(current)
    setCurrent('')
  }

  // Вычисление результата
  const compute = () => {
    let computation
    const prev = parseFloat(previous)
    const currentNum = parseFloat(current)
    
    if (isNaN(prev) || isNaN(currentNum)) return

    switch (operation) {
      case '+':
        computation = prev + currentNum
        break
      case '-':
        computation = prev - currentNum
        break
      case '*':
        computation = prev * currentNum
        break
      case '/':
        if (currentNum === 0) {
          alert("Деление на ноль невозможно!")
          clear()
          return
        }
        computation = prev / currentNum
        break
      default:
        return
    }

    // Округление для избежания проблем с плавающей точкой (напр. 0.1 + 0.2)
    const result = Math.round(computation * 1000000) / 1000000
    setCurrent(result.toString())
    setOperation(null)
    setPrevious('')
  }

  // Очистка
  const clear = () => {
    setCurrent('')
    setPrevious('')
    setOperation(null)
  }

  // Удаление последнего символа
  const deleteNumber = () => {
    setCurrent(current.toString().slice(0, -1))
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-dark-bg p-4">
      <div className="w-full max-w-xs bg-dark-card rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
        
        {/* Дисплей */}
        <div className="bg-dark-display p-6 flex flex-col items-end justify-end h-32 break-all">
          <div className="text-dark-textMuted text-sm h-6">
            {previous} {operation}
          </div>
          <div className="text-dark-text text-4xl font-bold tracking-wider">
            {current || '0'}
          </div>
        </div>

        {/* Клавиатура */}
        <div className="grid grid-cols-4 gap-0.5 bg-gray-800 p-0.5">
          {/* Ряд 1 */}
          <button onClick={clear} className="col-span-2 btn bg-red-500/10 text-red-400 hover:bg-red-500/20">AC</button>
          <button onClick={deleteNumber} className="btn bg-dark-btn hover:bg-dark-btnHover">DEL</button>
          <button onClick={() => chooseOperation('/')} className="btn bg-dark-accent/10 text-dark-accent hover:bg-dark-accent/20">÷</button>

          {/* Ряд 2 */}
          <button onClick={() => appendNumber(7)} className="btn bg-dark-btn hover:bg-dark-btnHover">7</button>
          <button onClick={() => appendNumber(8)} className="btn bg-dark-btn hover:bg-dark-btnHover">8</button>
          <button onClick={() => appendNumber(9)} className="btn bg-dark-btn hover:bg-dark-btnHover">9</button>
          <button onClick={() => chooseOperation('*')} className="btn bg-dark-accent/10 text-dark-accent hover:bg-dark-accent/20">×</button>

          {/* Ряд 3 */}
          <button onClick={() => appendNumber(4)} className="btn bg-dark-btn hover:bg-dark-btnHover">4</button>
          <button onClick={() => appendNumber(5)} className="btn bg-dark-btn hover:bg-dark-btnHover">5</button>
          <button onClick={() => appendNumber(6)} className="btn bg-dark-btn hover:bg-dark-btnHover">6</button>
          <button onClick={() => chooseOperation('-')} className="btn bg-dark-accent/10 text-dark-accent hover:bg-dark-accent/20">−</button>

          {/* Ряд 4 */}
          <button onClick={() => appendNumber(1)} className="btn bg-dark-btn hover:bg-dark-btnHover">1</button>
          <button onClick={() => appendNumber(2)} className="btn bg-dark-btn hover:bg-dark-btnHover">2</button>
          <button onClick={() => appendNumber(3)} className="btn bg-dark-btn hover:bg-dark-btnHover">3</button>
          <button onClick={() => chooseOperation('+')} className="btn bg-dark-accent/10 text-dark-accent hover:bg-dark-accent/20">+</button>

          {/* Ряд 5 */}
          <button onClick={() => appendNumber(0)} className="col-span-2 btn bg-dark-btn hover:bg-dark-btnHover rounded-bl-xl">0</button>
          <button onClick={() => appendNumber('.')} className="btn bg-dark-btn hover:bg-dark-btnHover">.</button>
          <button onClick={compute} className="btn bg-dark-accent text-white hover:bg-dark-accentHover rounded-br-xl">=</button>
        </div>
      </div>
      
      {/* Стили для кнопок */}
      <style>{`
        .btn {
          @apply h-16 text-xl font-medium transition-colors duration-200 active:scale-95;
        }
      `}</style>
    </div>
  )
}

export default App