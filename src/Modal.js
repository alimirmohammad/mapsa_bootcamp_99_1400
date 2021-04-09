import ReactDOM from 'react-dom';

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.26)'
      }}
      onClick={onClose}
    >
      <dialog open onClick={event => event.stopPropagation()}>
        <h3>Modal</h3>
        <button onClick={onClose}>Close</button>
      </dialog>
    </div>,
    document.body
  );
};

export default Modal;
