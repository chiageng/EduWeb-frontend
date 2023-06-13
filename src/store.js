import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  userLoginReducers,
  userRegisterReducers,
} from "./reducers/userReducer";

const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")) !== null
    ? JSON.parse(localStorage.getItem("user"))
    : null
  : null;

export const initialState = {
  userLogin: {user : userInfoFromStorage }
};

const middleware = [thunk];

const store = configureStore({
  reducer: {
    userRegister: userRegisterReducers,
    userLogin: userLoginReducers,
  },
  preloadedState: initialState,
  middleware: middleware,
});

export default store;
