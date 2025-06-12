import { useState } from 'react';

function TodoForm({ dispatch }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      date: new Date().toLocaleString()
    };

    dispatch({ type: 'ADD', payload: newTask });
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="New task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
