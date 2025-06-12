import { useReducer, useEffect } from 'react';
import { reducer, initialState } from './Reducer';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <TodoForm dispatch={dispatch} />
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default App;
