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
  courseDeleteReducers,
  courseEditReducers,
  courseEnrollReducers,
  courseViewReducers,
  coursesPriceViewReducers,
  coursesViewReducers,
  removeStudentsEnrollmentReducers,
  reviewCreateReducers,
  reviewsViewReducers,
  topicCreateReducers,
  topicDeleteReducers,
  topicEditReducers,
  topicViewReducers,
  videoWatchReducers,
} from "./reducers/courseReducer";
import {
  quizCreateReducers,
  quizDeleteReducers,
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
import { commentCreateReducers, commentVoteReducers, forumViewReducers } from "./reducers/forumReducer";
import { LeftBarReducers } from "./reducers/navigationReducer";

const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")) !== null
    ? JSON.parse(localStorage.getItem("user"))
    : null
  : null;

const leftBarInfoFromStorage = localStorage.getItem("leftbar")
  ? JSON.parse(localStorage.getItem("leftbar")) !== null
    ? JSON.parse(localStorage.getItem("leftbar"))
    : null
  : null;


export const initialState = {
  userLogin: { user: userInfoFromStorage },
  leftBar : { open: leftBarInfoFromStorage }
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
    courseDelete: courseDeleteReducers,
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
    quizDelete: quizDeleteReducers,
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
    reviewCreate: reviewCreateReducers,
    reviewsView: reviewsViewReducers,
    commentVote: commentVoteReducers,
    leftBar: LeftBarReducers
  },
  preloadedState: initialState,
  middleware: middleware,
});

export default store;
