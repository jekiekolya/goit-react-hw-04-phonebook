import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactItem,
  Icon,
  NameContact,
} from './ContactList.styled';

import Button from '../Button';

import { Box } from '../Box';
import { useEffect, useRef } from 'react';

function ContactList({ contacts, filterValue, onDeleteContact }) {
  const triggerToSetLocalStorage = useRef(1);

  useEffect(() => {
    if (triggerToSetLocalStorage.current < 3) {
      triggerToSetLocalStorage.current += 1;
      return;
    }

    localStorage.setItem('listContacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Box>
      <ContactsList>
        {contacts
          .filter(item => {
            return item.name.toLocaleLowerCase().includes(filterValue);
          })
          .map(contact => {
            return (
              <ContactItem key={contact.id}>
                <Icon />
                <NameContact>
                  {contact.name}: {contact.number}
                </NameContact>
                <Button
                  type="button"
                  name="Delete"
                  onClick={() => onDeleteContact(contact.id)}
                />
              </ContactItem>
            );
          })}
      </ContactsList>
    </Box>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filterValue: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
