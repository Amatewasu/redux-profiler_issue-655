import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED
} from '../constants/ActionTypes';
import { slowdown } from '../slowdown';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      slowdown();
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ];

    case DELETE_TODO:
      slowdown();
      return state.filter(todo => todo.id !== action.id);

    case EDIT_TODO:
      slowdown();
      return state.map(todo => (todo.id === action.id ? { ...todo, text: action.text } : todo));

    case COMPLETE_TODO:
      slowdown();
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case COMPLETE_ALL_TODOS:
      slowdown();
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }));

    case CLEAR_COMPLETED:
      slowdown();
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
}
