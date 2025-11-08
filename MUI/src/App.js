import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // 好きな色に変更可能
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        カスタムテーマのボタン
      </Button>
    </ThemeProvider>
  );
}


export default App;

