import Button from '../UI/Button';
import './Modal.scss';

const Modal = ({ message, onCloseModal }) => {
  return (
    <div className={`modal`}>
      <div onClick={onCloseModal} className="modal__backdrop"></div>
      <div className="modal__body">
        <div className="modal__title">Oops!</div>
        <p className="modal__text">{message}</p>
        <Button onClick={onCloseModal} type="button">
          Cancel window
        </Button>
      </div>
    </div>
  );
};

export default Modal;
