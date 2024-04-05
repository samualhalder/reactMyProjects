import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm({ text, setText, add, selectedTodoId, setTodos, setadd }) {
  const { addTodos, todos } = useTodo();
  const handleAdd = (e) => {
    e.preventDefault();
    addTodos(text);
    setText("");
  };
  const handleEdit = (e) => {
    const newObj = todos.map((todo) =>
      todo.id === selectedTodoId ? { ...todo, text: text } : todo
    );
    setTodos(newObj);
    setText("")
    setadd(true);
  };
  return (
    <>
      <input
        type="text"
        className=" h-10 m-3 w-[80%] p-3 outline-purple-500 rounded-md"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {add ? (
        <button
          onClick={(e) => handleAdd(e)}
          className="bg-yellow-400 text-white h-10 p-1 m-1 rounded-md hover:bg-yellow-200"
        >
          ADD
        </button>
      ) : (
        <button
          onClick={(e) => handleEdit(e)}
          className="bg-yellow-400 text-white h-10 p-1 m-1 rounded-md hover:bg-yellow-200"
        >
          Edit
        </button>
      )}
    </>
  );
}

export default TodoForm;
