import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk, ThunkAction, ThunkMiddleware } from "redux-thunk";
import { contactsReducer } from "./reducers/contacts";
import { groupContactsReducer } from "./reducers/group-reducer";
import { ProjectActions } from "./actions/actions";
import { logAtionMiddleware } from "src/pages/logAtionMiddleware";
import { ContactsState, GroupsState } from "./types";

interface RootState {
  contacts: ContactsState;
  groups: GroupsState;
}

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groups: groupContactsReducer,
});

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunk as ThunkMiddleware<RootState, ProjectActions>,
    logAtionMiddleware
  )
);

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, ProjectActions>;
export type ROOTState = ReturnType<typeof rootReducer>;
