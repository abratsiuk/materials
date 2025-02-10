import { createStore } from "redux";
import { createAction, nanoid, createReducer } from "@reduxjs/toolkit";

// action creators
// export const addTodo = (title) => ({
//   type: "ADD_TODO",
//   title
// });
export const addTodo = createAction("@@todos/ADD_TODOS", (title) => ({
  payload: {
    title,
    id: nanoid(),
    completed: false
  }
}));
export const removeTodo = createAction("@@todos/REMOVE_TODO");
export const toggleTodo = createAction("@@todos/TOGGLE_TODO");

// console.log(addTodo.toString());
// console.log(addTodo());
// console.log(addTodo("learn actions"));

// const todos = createReducer([], (builder) => {
//   builder
//     .addCase(addTodo, (state, action) => {
//       state.push(action.payload);
//     })
//     .addCase(toggleTodo, (state, action) => {
//       const id = action.payload;
//       const todo = state.find((todo) => todo.id === id);
//       todo.completed = !todo.completed;
//     })
//     .addCase(removeTodo, (state, action) => {
//       const id = action.payload;
//       return state.filter((todo) => todo.id !== id);
//     });
// });
const todos = createReducer([], {
  [addTodo]: (state, action) => void state.push(action.payload),
  [toggleTodo]: (state, action) => {
    const id = action.payload;
    const todo = state.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
  },
  [removeTodo]: (state, action) => {
    const id = action.payload;
    // return state.filter((todo) => todo.id !== id);
    const newTodos = state.filter((todo) => todo.id !== id);
    return newTodos;
  }
});

// const todos = (state = [], action) => {
//   switch (action.type) {
//     case addTodo.toString(): {
//       return [
//         ...state,
//         {
//           ...action.payload
//         }
//       ];
//     }
//     case removeTodo.toString(): {
//       return state.filter((todo) => todo.id !== action.payload);
//     }
//     case toggleTodo.toString(): {
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     }
//     default: {
//       return state;
//     }
//   }
// };

export const store = createStore(todos);
