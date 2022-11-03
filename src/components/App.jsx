import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

import { Box } from './Box';
import { MainTitle, SecondaryTitle } from './App.styled';

import { ContactForm, ContactList, Filter } from '../components';
import { useEffect } from 'react';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const oldContacts = JSON.parse(localStorage.getItem('listContacts'));
    oldContacts && setContacts(oldContacts);
  }, []);

  const addContact = contact => {
    const { name, number } = contact;
    const newContacts = [...contacts];
    newContacts.unshift({ id: nanoid(), name: name, number: number });

    setContacts(newContacts);
    Notify.success(`${name} successfully added`);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handlerFilterList = e => {
    const inputValue = e.target.value.toLocaleLowerCase();

    setFilter(inputValue);
  };

  return (
    <Box bg="mainBg" color="text" padding="30px">
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={addContact} contacts={contacts} />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter handlerFilterList={handlerFilterList} />
      <ContactList
        contacts={contacts}
        filterValue={filter}
        onDeleteContact={deleteContact}
      />
    </Box>
  );
}
