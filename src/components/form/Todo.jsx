import Modal from "../modals/Modal";
import "./form.css";
import useModal from "../../hooks/useModal";
import { useRef } from "react";

export default function Todo({ todo, handleUpdate, handleDelete }) {
  const [open, openModal, closeModal] = useModal(false);

  const inputRef = useRef("");

  const clickUpdate = () => {
    handleUpdate({
      id: todo.id,
      todo: inputRef.current.value,
      completed: false,
    });
    closeModal();
  };

  return (
    <>
      <li className='todoLi'>
        <div className='todoLi__todo'>
          <button className='check'></button>
          <p>{todo.todo}</p>
        </div>
        <div>
          <button className='btn btnLi' onClick={openModal}>
            Update
          </button>
          <button className='btn btnLi' onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      </li>
      <Modal title={todo.todo} closeModal={closeModal} open={open}>
        <label htmlFor='change'> To </label>
        <input
          ref={inputRef}
          type='text'
          id='change'
          placeholder='change to Task'
        />
        <button onClick={clickUpdate}>Change</button>
      </Modal>
    </>
  );
}
