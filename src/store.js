import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  userLoginReducers,
  userLogoutReducers,
  userProfileReducer,
  userRegisterReducers,
} from "./reducers/userReducer";
import {
  checkEnrolledReducers,
  courseCreateReducers,
  courseEditReducers,
  courseEnrollReducers,
  courseViewReducers,
  coursesPriceViewReducers,
  coursesViewReducers,
  topicCreateReducers,
  topicDeleteReducers,
  topicEditReducers,
  topicViewReducers,
  videoWatchReducers,
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
    coursesPriceView: coursesPriceViewReducers,
    courseEdit: courseEditReducers,
    courseView: courseViewReducers,
    topicCreate: topicCreateReducers,
    topicDelete: topicDeleteReducers,
    topicEdit: topicEditReducers,
    topicView: topicViewReducers,
    enrollCheck: checkEnrolledReducers,
    courseEnroll: courseEnrollReducers,
    videoWatch: videoWatchReducers,
  },
  preloadedState: initialState,
  middleware: middleware,
});

export default store;
