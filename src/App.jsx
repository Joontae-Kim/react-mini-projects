// App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    console.log('clicked:', value); // 🔍 클릭 확인용
    if (value === 'C') return setExpression('');
    if (value === '=') {
      const _calculation = eval(expression).toString()
      console.log(`   ~ _calculation => `, _calculation)
      try {
        setExpression(_calculation);
      } catch {
        // setExpression('');
        alert('Error')
      }

      
      return;
    }
    const _expression = expression + value 
    console.log(` ~ _expression => `, _expression)
    setExpression(_expression);
  };

  const buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+',
    'C'
  ];

  return (
    <div className="calculator">
      <div className="display">
        {expression}
      </div>
      <div className="buttons">
        {buttons.map((btn, i) => (
          <button key={i} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
