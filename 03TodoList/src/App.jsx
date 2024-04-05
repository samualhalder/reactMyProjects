import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [add, setadd] = useState(true);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const addTodos = (textValue) => {
    const todoObj = {
      text: textValue,
      id: Date.now(),
      complete: false,
    };
    setTodos((pre) => [...pre, todoObj]);
    console.log(todos);
  };
  const removeTodos = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const updateTodos = (id, todo) => {
    setTodos((pre) => {
      pre.id === id ? { ...pre, text: todo } : pre;
    });
  };
  const toggleLine = (todo) => {
    if (todo.complete === false) {
      setTodos(
        todos.map((elm) =>
          elm.id === todo.id ? { ...elm, complete: true } : elm
        )
      );
    } else {
      setTodos(
        todos.map((elm) =>
          elm.id === todo.id ? { ...elm, complete: false } : elm
        )
      );
    }
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todo"));
    if (data && data.length > 0) {
      setTodos(data);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoProvider
      className="bg-purple-500"
      value={{ todos, addTodos, removeTodos, updateTodos, toggleLine }}
    >
      <div className="bg-purple-200 p-11 h-screen flex flex-col">
        <div className="bg-purple-500 w-[50%] rounded-md p-4 mx-auto ">
          <TodoForm
            text={text}
            setText={setText}
            add={add}
            setadd={setadd}
            selectedTodoId={selectedTodoId}
            setTodos={setTodos}
          />
        </div>
        <div className="bg-purple-500 w-[50%] rounded-md p-4 mx-auto mt-5 overflow-auto">
          <TodoList
            text={text}
            setText={setText}
            setadd={setadd}
            setSelectedTodoId={setSelectedTodoId}
          />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
