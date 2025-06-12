import { useState } from 'react';
import { FaEdit, FaTrash, FaCheck, FaSave } from 'react-icons/fa';

function TodoItem({ task, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  function handleUpdate() {
    dispatch({ type: 'UPDATE', payload: { id: task.id, text: newText } });
    setIsEditing(false);
  }

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            maxLength="35"
            placeholder="Update task"
            value={newText}
            onChange={e => setNewText(e.target.value)}
          />
          <button onClick={handleUpdate}>
            <FaSave />
          </button>
        </>
      ) : (
        <>
          <span>{task.text}</span> <em>{task.date}</em>
          <button onClick={() => setIsEditing(true)}>
            <FaEdit />
          </button>
          <button onClick={() => dispatch({ type: 'DELETE', payload: task.id })}>
            <FaTrash />
          </button>
          <button onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: task.id })}>
            <FaCheck />
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
