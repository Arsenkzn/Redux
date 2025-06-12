import { combineReducers, createStore } from "redux";
import { contactsReducer } from "./reducers/contacts";
import { groupContactsReducer } from "./reducers/group-reducer";


export const store = createStore(
  combineReducers({
    contacts: contactsReducer,
    groups: groupContactsReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;