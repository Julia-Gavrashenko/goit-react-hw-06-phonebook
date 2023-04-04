import { createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
    initialState: {filteredContacts: ''},
  reducers: {   
       getFilteredContacts(state, action) {
          state.filteredContacts = action.payload;
    },
  },
});

export const { getFilteredContacts } = filterSlice.actions;
export const contactsFilter = filterSlice.reducer;