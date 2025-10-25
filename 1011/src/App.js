import React, { useState, useEffect } from "react";//

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
      date: new Date().toISOString(),
      subTodos: [],
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const addSubTodo = (parentId, subText) => {
    if (!subText.trim()) return;
    const newSub = {
      id: Date.now(),
      text: subText,
      checked: false,
    };
    setTodos(todos.map(todo =>
      todo.id === parentId
      ? {...todo, subTodos: [...todo.subTodos, newSub]}
      : todo
    ));
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

  const [sortByChecked, setSortByChecked] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);

  // const displayedTodos = sortByChecked
  // ? [...todos].sort((a,b) => Number(a.checked) - Number(b.checked))
  // : todos;

  const displayedTodos = [...todos]
  .sort((a,b) => {
    if (sortByChecked){
      return Number(a.checked) - Number(b.checked);
    }
    if (sortByDate){
      return new Date(a.date) - new Date(b.date);
    }
    return 0;
  });

const toggleSubCheck = (parentId, subId) => {
  setTodos(todos.map(todo => {
    if (todo.id !== parentId) return todo;

    const updatedSubs = todo.subTodos.map(sub =>
      sub.id === subId ? { ...sub, checked: !sub.checked } : sub
    );

    const allChecked = updatedSubs.every(sub => sub.checked);

    return {
      ...todo,
      subTodos: updatedSubs,
      checked: allChecked,
    };
  }));
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
      <button onClick={() => setSortByChecked(!sortByChecked)}>
        {sortByChecked ? "並べ替え解除":"チェック済みを後ろに"}
      </button>
      <button onClick={() => setSortByDate(!sortByDate)}>
        {sortByDate ? "日付を解除" : "日付順に並べる"}
      </button>

      <ul>
        {displayedTodos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleCheck(todo.id)}
              />
              {todo.text}
              <span style={{ marginLeft: "10px", fontSize: "0.8em", color: "#666" }}>
                 ({new Date(todo.date).toLocaleDateString()})
              </span>
            </label>
            <button onClick={() => deleteTodo(todo.id)}>削除</button>

      <ul style={{ marginLeft: "20px" }}>
        {todo.subTodos.map((sub) => (
          <li key={sub.id}>
            <label>
              <input
                type="checkbox"
                checked={sub.checked}
                onChange={() => toggleSubCheck(todo.id, sub.id)}
              />
              {sub.text}
            </label>
          </li>
        ))}
      </ul>
            <input
        placeholder="サブTODOを追加"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addSubTodo(todo.id, e.target.value);
            e.target.value = "";
          }
        }}
      />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;