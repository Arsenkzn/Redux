import "./MainApp.scss";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ContactListPage,
  GroupPage,
  FavoritListPage,
  GroupListPage,
  ContactPage,
} from "src/pages";
import { Layout } from "src/components/Layout";
import { useAppDispatch } from "src/redux/hooks";
import { useEffect } from "react";
import {
  loadContactsActionFailure,
  loadContactsActionRequest,
  loadContactsActionSuccess,
  loadGroupContactsAction,
  setFavoritesContactsAction,
} from "src/redux/actions/actions";
import axios from 'axios'
import { DATA_CONTACT } from "src/__data__";

export const MainApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
  dispatch(loadContactsActionRequest());
  axios
    .get("http://localhost:3000/contact")
    .then((response) => {
      dispatch(loadContactsActionSuccess(response.data));
    })
    .catch((error) => {
      console.error(error.message);
    })
    .finally(() => {
      dispatch(setFavoritesContactsAction());
    });

    axios
      .get("http://localhost:3000/groups")
      .then((response) => {
        dispatch(loadGroupContactsAction(response.data));
      })
      .catch(() => {
        dispatch(loadContactsActionSuccess(DATA_CONTACT))
      })
      .catch((error) => {
        dispatch(loadContactsActionFailure(error.message));
      });
  }, [dispatch]);
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ContactListPage />} />
            <Route path="contact">
              <Route index element={<ContactListPage />} />
              <Route path=":contactId" element={<ContactPage />} />
            </Route>
            <Route path="groups">
              <Route index element={<GroupListPage />} />
              <Route path=":groupId" element={<GroupPage />} />
            </Route>
            <Route path="favorit" element={<FavoritListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
