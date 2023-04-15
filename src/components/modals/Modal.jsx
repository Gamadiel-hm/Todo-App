import "./modal.css";

const Modal = ({ title, children, closeModal, open }) => {
  return (
    <div className={`containerModal ${open && "isVisible"}`}>
      <div className='modal'>
        <div className='modalTittle'>
          <h3>Change - {title}</h3>
          <button onClick={closeModal}>x</button>
        </div>
        <div className='modalChildren'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
