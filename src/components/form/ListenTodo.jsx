import Todo from "./Todo";

import "./form.css";

export default function ListenTodo({ todos, handleUpdate, handleDelete }) {
  console.log(todos);
  return (
    <>
      <ul className='containerUl'>
        {todos.map(
          (todo) =>
            todo.todo && (
              <Todo key={todo.id} todo={todo} handleUpdate={handleUpdate} handleDelete={handleDelete} />
            )
        )}
      </ul>
    </>
  );
}
