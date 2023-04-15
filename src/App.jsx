import { useState } from "react";
import Form from "./components/form/form";
import ListenTodo from "./components/form/ListenTodo";

const initialobject = [
  {
    id: 1,
    todo: "",
    completed: false,
  },
];

function App() {
  const initialTodos = localStorage.getItem("todos") === null
    ? initialobject
    : JSON.parse(localStorage.getItem("todos"))
  const [todos, setTodos] = useState(initialTodos);

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
    localStorage.setItem("todos", JSON.stringify([...todos, todo]));
  };

  const handleUpdate = (todoUp) => {
    const newArray = todos.map((todo) => {
      if (todo.id === todoUp.id)
        return {
          ...todo,
          todo: todoUp.todo,
        };

      return todo;
    });

    setTodos([...newArray]);
    localStorage.setItem("todos", JSON.stringify([...newArray]));

  };

  const handleDelete = (id) => {
    const filter = todos.filter(todo => todo.id !== id)
    setTodos(filter);
    localStorage.setItem("todos", JSON.stringify(filter));
  }

  return (
    <>
      <h1>Todo</h1>
      <Form createTodo={createTodo} />
      <ListenTodo todos={todos} handleUpdate={handleUpdate} handleDelete={handleDelete} />
    </>
  );
}

export default App;
