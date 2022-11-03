import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import InputField from '../InputField';
import Button from '../Button';

import { Form } from './ContactForm.styled';
import { useState } from 'react';

function FormAddContact({ onSubmit, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.currentTarget.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Check input value and create notification
    const statusValidation = checkEqualValue.call(contacts, name);
    if (statusValidation === 'alert') return;

    onSubmit({ name, number });

    // reset values in form
    resetForm('', '');
  };

  function resetForm(resetName, resetNumber) {
    setName(resetName);
    setNumber(resetNumber);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        nameLabel="Name"
        type="text"
        name="name"
        value={name}
        placeholder="Jekie Kolya"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChangeName}
      />

      <InputField
        nameLabel="Number"
        type="tel"
        name="number"
        value={number}
        placeholder="777-77-77"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChangeNumber}
      />

      <Button name="Add contact" />
    </Form>
  );
}

FormAddContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function checkEqualValue(name) {
  const equalValue = this.filter(item => {
    return item.name === name;
  });

  if (equalValue.toString()) {
    Notify.failure(`${name} is already in contact`);
    return 'alert';
  }

  return 'ok';
}

export default FormAddContact;
