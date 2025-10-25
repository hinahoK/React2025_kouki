import './App.css';

import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleClickPlus = () => {
    setCount(count + 1);
  };  
  const handleClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div style={{textAligh: 'center',margin: '100px'}}>
      <h1>カウントアップアプリ</h1>
      <a>現在のカウント：{count}</a>
      <button onClick={handleClickPlus}>+1</button>
      <button onClick={handleClickMinus}>-1</button>
    </div>
  );
}

export default App;
