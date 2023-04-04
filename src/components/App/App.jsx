import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { GlobalStyle } from '../GlobalStyle';
import { ContactListTitle, FormTitle, ContactsLayout } from './App.styled';

export const App = () => {
  return (
    <ContactsLayout>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm />
      <ContactListTitle>Contacts</ContactListTitle>
      <ContactFilter />
      <ContactList />
      <GlobalStyle />
    </ContactsLayout>
  );
};
