// 空欄の場合は「未入力です」表示、文字数制限とカウント
import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

function App() {
  const [form, setForm] = useState({ name: '', email: '', comment: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 最大文字数
  const limits = { name: 20, email: 30, comment: 100 };

  return (
    <Box sx={{ p: 2 }}>
      {/* フォーム部分 */}
      {Object.keys(form).map((key) => (
        <TextField
          key={key}
          label={key}
          name={key}
          value={form[key]}
          onChange={handleChange}
          inputProps={{ maxLength: limits[key] }}
          helperText={`${form[key].length}/${limits[key]}文字`}
          fullWidth
          margin="normal"
        />
      ))}

      {/* 表示部分 */}
      <Box sx={{ border: '1px solid #ccc', p: 2 }}>
        <p>名前: {form.name || '未入力です'}</p>
        <p>メール: {form.email || '未入力です'}</p>
        <p>コメント: {form.comment || '未入力です'}</p>
      </Box>
    </Box>
  );
}

export default App;