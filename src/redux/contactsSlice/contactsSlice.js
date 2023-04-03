import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialContacts } from 'data/initialContacts';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return { payload: { name, number, id: nanoid() } };
      },
      },
      
       deleteContact(state, action) {
      state.items = state.items.filter(contact=> contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;