import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  userLoginReducers,
  userLogoutReducers,
  userProfileReducer,
  userRegisterReducers,
} from "./reducers/userReducer";
import {
  courseCreateReducers,
  courseEditReducers,
  courseViewReducers,
  coursesViewReducers,
  topicCreateReducers,
  topicDeleteReducers,
  topicEditReducers,
  topicViewReducers,
} from "./reducers/courseReducer";

const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")) !== null
    ? JSON.parse(localStorage.getItem("user"))
    : null
  : null;

export const initialState = {
  userLogin: { user: userInfoFromStorage },
};

const middleware = [thunk];

const store = configureStore({
  reducer: {
    userRegister: userRegisterReducers,
    userLogin: userLoginReducers,
    userLogout: userLogoutReducers,
    courseCreate: courseCreateReducers,
    coursesView: coursesViewReducers,
    courseEdit: courseEditReducers,
    courseView: courseViewReducers,
    topicCreate: topicCreateReducers,
    topicDelete: topicDeleteReducers,
    topicEdit: topicEditReducers,
    topicView: topicViewReducers,
  },
  preloadedState: initialState,
  middleware: middleware,
});

export default store;
