import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  profileEditReducer,
  profileViewReducer,
  userLoginReducers,
  userLogoutReducers,
  userRegisterReducers,
} from "./reducers/userReducer";
import {
  approveStudentsEnrollmentReducers,
  checkEnrolledReducers,
  checkStudentsEnrollmentReducers,
  courseCreateReducers,
  courseEditReducers,
  courseEnrollReducers,
  courseViewReducers,
  coursesPriceViewReducers,
  coursesViewReducers,
  removeStudentsEnrollmentReducers,
  topicCreateReducers,
  topicDeleteReducers,
  topicEditReducers,
  topicViewReducers,
  videoWatchReducers,
} from "./reducers/courseReducer";
import {
  quizCreateReducers,
  quizEditReducers,
  quizQuestionCreateReducers,
  quizQuestionDeleteReducers,
  quizQuestionEditReducers,
  quizQuestionViewReducers,
  quizSaveReducers,
  quizViewReducers,
  quizzesViewReducers,
} from "./reducers/quizReducer";
import { imageDeleteReducers, imageUploadReducers, videoDeleteReducers, videoUploadReducers } from "./reducers/uploadReducer";
import { commentCreateReducers, forumViewReducers } from "./reducers/forumReducer";

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
    quizCreate: quizCreateReducers,
    quizEdit: quizEditReducers,
    quizzesView: quizzesViewReducers,
    quizView: quizViewReducers,
    quizQuestionCreate: quizQuestionCreateReducers,
    quizQuestionView: quizQuestionViewReducers,
    quizQuestionEdit: quizQuestionEditReducers,
    quizQuestionDelete: quizQuestionDeleteReducers,
    quizSave: quizSaveReducers,
    profileEdit: profileEditReducer,
    profileView: profileViewReducer,
    imageUpload: imageUploadReducers,
    imageDelete: imageDeleteReducers,
    videoDelete: videoDeleteReducers,
    videoUpload: videoUploadReducers,
    commentCreate: commentCreateReducers,
    forumView: forumViewReducers,
    studentsEnrollmentCheck: checkStudentsEnrollmentReducers,
    studentEnrollmentApprove: approveStudentsEnrollmentReducers,
    studentEnrollmentRemove: removeStudentsEnrollmentReducers,
  },
  preloadedState: initialState,
  middleware: middleware,
});

export default store;
