export const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

export function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      return [...state, payload];

    case 'UPDATE':
      return state.map(task =>
        task.id === payload.id
          ? { ...task, text: payload.text, date: new Date().toLocaleString() }
          : task
      );

    case 'DELETE':
      return state.filter(task => task.id !== payload);

    case 'TOGGLE_COMPLETE':
      return state.map(task =>
        task.id === payload
          ? { ...task, completed: !task.completed }
          : task
      );

    default:
      return state;
  }
}
