import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { userRegisterReducers } from "./reducers/userReducer";


export const initialState = {
 
};

const middleware = [thunk];

const store = configureStore({
  reducer: {
    userRegister: userRegisterReducers,
  },
  preloadedState: initialState,
  middleware: middleware,
});

export default store;
