import { applyMiddleware, combineReducers, createStore } from "redux";
import { contactsReducer } from "./reducers/contacts";
import { groupContactsReducer } from "./reducers/group-reducer";
import { logAtionMiddleware } from "src/pages/logAtionMiddleware";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    groups: groupContactsReducer,
  })

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(logAtionMiddleware),
);

export type RootState = ReturnType<typeof rootReducer>;