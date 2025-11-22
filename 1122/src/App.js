// 保存ボタンと一覧表示
import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';

function App() {
  const [form, setForm] = useState({ name: '', email: '', comment: '' });
  const [saved, setSaved] = useState([]); // 保存したデータ一覧

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setSaved([...saved, form]); // 配列に追加
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* フォーム部分 */}
      <TextField label="名前" name="name" value={form.name} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="メール" name="email" value={form.email} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="コメント" name="comment" value={form.comment} onChange={handleChange} fullWidth margin="normal" />

      <Button variant="contained" onClick={handleSave} sx={{ mt: 2 }}>
        保存
      </Button>

      {/* 表示部分 */}
      <Box sx={{ border: '1px solid #ccc', p: 2, mt: 2 }}>
        <h3>現在の入力</h3>
        <p>名前: {form.name || '未入力です'}</p>
        <p>メール: {form.email || '未入力です'}</p>
        <p>コメント: {form.comment || '未入力です'}</p>
      </Box>

      {/* 保存一覧 */}
      <Box sx={{ border: '1px solid #ccc', p: 2, mt: 2 }}>
        <h3>保存一覧</h3>
        {saved.map((item, index) => (
          <Box key={index} sx={{ mb: 1 }}>
            <p>名前: {item.name}</p>
            <p>メール: {item.email}</p>
            <p>コメント: {item.comment}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default App;