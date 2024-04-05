import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      text: "new",
      id: 1,
      complete: false,
    },
  ],
  addTodos: (todo) => {},
  removeTodos: (id) => {},
  updateTodos: (id, todo) => {},
  toggleLine: (id) => {},
});

export const TodoProvider = TodoContext.Provider;
export const useTodo = () => {
  return useContext(TodoContext);
};
