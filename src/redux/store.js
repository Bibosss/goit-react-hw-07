import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'contacts-persist',
  version: 1,
  storage,
}

const persistedReducerContact = persistReducer(persistConfig, contactsReducer)
const persistedReducerFilter = persistReducer(persistConfig, filterReducer)
export const store = configureStore({
    reducer: {
        contacts: persistedReducerContact,
        filters: persistedReducerFilter,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);