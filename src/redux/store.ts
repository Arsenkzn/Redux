import { combineReducers, createStore } from "redux";
import { contactsReducer } from "./reducers/contacts";
import { groupContactsReducer } from "./reducers/group-reducer";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    groups: groupContactsReducer,
  })

export const store = createStore(
  rootReducer
);

export type RootState = ReturnType<typeof rootReducer>;