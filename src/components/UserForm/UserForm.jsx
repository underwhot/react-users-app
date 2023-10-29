import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../UI/Button';
import './UserForm.scss';
import Modal from '../Modal/Modal';

const UserForm = ({ addNewUser }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (name.trim().length === 0) {
      setOpenModal({ message: 'Enter valid name' });
      return;
    }

    if (+age < 5) {
      setOpenModal({ message: 'Age must be greater than 5' });
      return;
    }

    addNewUser({ name: name.trim(), age, id: uuidv4() });

    setName('');
    setAge('');
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <Modal message={openModal.message} onCloseModal={closeModal}></Modal>
      )}
      <form onSubmit={onSubmitHandler} className="user-form">
        <div className="user-form__row">
          <label className="user-form__label" htmlFor="name">
            Name:
          </label>
          <input
            onChange={onChangeName}
            value={name}
            className="user-form__input"
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
          />
        </div>
        <div className="user-form__row">
          <label className="user-form__label" htmlFor="age">
            Age:
          </label>
          <input
            onChange={onChangeAge}
            value={age}
            className="user-form__input"
            type="number"
            name="age"
            id="age"
            placeholder="Enter age"
          />
        </div>
        <Button type="submit">Add new user</Button>
      </form>
    </>
  );
};

export default UserForm;
