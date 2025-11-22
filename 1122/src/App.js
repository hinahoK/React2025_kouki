// App.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function App() {
  // 入力値を管理するためのstate。初期値は空文字。
  const [text, setText] = useState('');

  return (
    <Box sx={{ p: 2 }}>
      {/* フォーム部分 */}
      <Box sx={{ mb: 2 }}>
        <TextField
          label="入力してください"
          variant="outlined"
          value={text} // stateの値を表示
          onChange={(e) => setText(e.target.value)} // 入力が変わるたびにstate更新
          fullWidth
        />
      </Box>

      {/* 表示部分 */}
      <Box sx={{ border: '1px solid #ccc', p: 2 }}>
        {/* 入力した文字をリアルタイムで表示 */}
        <p>{text}</p>
      </Box>
    </Box>
  );
}

export default App;