// 名前・メール・コメントの複数項目に対応
import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

function App() {
  // 複数項目をオブジェクトで管理
  const [form, setForm] = useState({ name: '', email: '', comment: '' });

  // 入力が変わったときに更新する関数
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* フォーム部分 */}
      <Box sx={{ mb: 2 }}>
        <TextField label="名前" name="name" value={form.name} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="メール" name="email" value={form.email} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="コメント" name="comment" value={form.comment} onChange={handleChange} fullWidth margin="normal" />
      </Box>

      {/* 表示部分 */}
      <Box sx={{ border: '1px solid #ccc', p: 2 }}>
        <p>名前: {form.name}</p>
        <p>メール: {form.email}</p>
        <p>コメント: {form.comment}</p>
      </Box>
    </Box>
  );
}

export default App;