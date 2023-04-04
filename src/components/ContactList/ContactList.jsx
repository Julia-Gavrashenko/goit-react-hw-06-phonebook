import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactContainer, List } from './ContactList.styled';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name && contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactContainer>
      <List>
        {filteredContacts.map(contact => (
          <ContactItem key={nanoid()} info={contact}></ContactItem>
        ))}
      </List>
    </ContactContainer>
  );
};
