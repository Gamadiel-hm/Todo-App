import "./form.css";

export default function Form({ createTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newTodo = {
      id: Date.now(),
      todo: form.get("todo"),
      completed: false,
    };
    createTodo(newTodo);
  };

  return (
    <>
      <form className='formContainer' onSubmit={handleSubmit}>
        <span className='check'></span>
        <input
          className='inputTodo'
          name='todo'
          type='text'
          placeholder='Enter Todo'
        />
      </form>
    </>
  );
}
