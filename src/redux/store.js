import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
// import { contactsReducer } from "./contactsSlice/contactsSlice";
import { contactsFilter } from "./filterSlice/filterSlice";
import {persistedContactsReducer} from "./contactsSlice/contactsSlice";

export const store = configureStore({
    reducer: {
        contacts:  persistedContactsReducer,
        filter:  contactsFilter,
    },

      middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
})

export const persistor = persistStore(store);