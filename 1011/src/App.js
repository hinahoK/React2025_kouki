import React, { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      checked: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleCheck = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>TODOアプリ</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="TODOを入力"
      />
      <button onClick={addTodo}>追加</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleCheck(todo.id)}
              />
              {todo.text}
            </label>
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;