import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('count');
    return saved !== null ? Number(saved) : 0;
  });

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const handleClickPlus = () => {
    setCount(prev => prev + 1);
  };

  const handleClickMinus = () => {
    setCount(prev => prev - 1);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSetInitialValue = () => {
    const num = Number(inputValue);
    if (!isNaN(num)) {
      setCount(num);
      setInputValue('');
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '100px' }}>
      <h1>カウントアップアプリ</h1>
      <p>現在のカウント：{count}</p>
      <button onClick={handleClickPlus}>+1</button>
      <button onClick={handleClickMinus}>-1</button>

      <div style={{ marginTop: '30px' }}>
        <input
          type='number'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='初期値を入力'
        />
        <button onClick={handleSetInitialValue}>初期値をリセット</button>
      </div>
    </div>
  );
}

export default App;
