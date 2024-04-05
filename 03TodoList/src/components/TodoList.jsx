import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoList({ text, setText, setadd, setSelectedTodoId }) {
  const { todos, removeTodos, updateTodos, toggleLine } = useTodo();
  const [todo, setTodo] = useState("");
  const handleRemove = (id) => {
    removeTodos(id);
  };
  const handleEdit = (todo) => {
    setText(todo.text);
    setadd(false);
    setSelectedTodoId(todo.id);
  };
  const handleLine = (todo) => {
    toggleLine(todo);
    console.log(todo);
  };

  return (
    <>
      <ul>
        {todos &&
          todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={(e) => handleLine(todo)}
              />
              {todo.complete === false ? (
                <input
                  type="text"
                  value={todo.text}
                  className=" h-10 m-3 w-[80%] p-3 outline-purple-500 rounded-md outline-none"
                  readOnly
                  onChange={(e) => setTodo(e.target.value)}
                />
              ) : (
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => e}
                  className=" h-10 m-3 w-[80%] p-3 outline-purple-500 rounded-md outline-none line-through bg-green"
                />
              )}
              <button
                onClick={(e) => handleEdit(todo)}
                className="bg-yellow-400 text-white h-10 p-1 m-1 rounded-md hover:bg-yellow-200"
              >
                ✏️
              </button>
              <button
                onClick={(e) => handleRemove(todo.id)}
                className="bg-yellow-400 text-white h-10 p-1 m-1 rounded-md hover:bg-yellow-200"
              >
                ❌
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default TodoList;
