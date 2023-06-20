import {
  COURSE_CREATE_FAIL,
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,

  COURSE_EDIT_FAIL,
  COURSE_EDIT_REQUEST,
  COURSE_EDIT_SUCCESS,

  COURSES_VIEW_FAIL,
  COURSES_VIEW_REQUEST,
  COURSES_VIEW_RESET,
  COURSES_VIEW_SUCCESS,

  COURSE_VIEW_FAIL,
  COURSE_VIEW_REQUEST,
  COURSE_VIEW_RESET,
  COURSE_VIEW_SUCCESS,

  TOPIC_CREATE_FAIL,
  TOPIC_CREATE_REQUEST,
  TOPIC_CREATE_SUCCESS,

  TOPIC_DELETE_FAIL,
  TOPIC_DELETE_REQUEST,
  TOPIC_DELETE_SUCCESS,
} from "../constants/course";

export const courseCreateReducers = (state = {}, action) => {
  switch (action.type) {
    case COURSE_CREATE_REQUEST:
      return { loading: true };

    case COURSE_CREATE_SUCCESS:
      return { loading: false, success: true };

    case COURSE_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const coursesViewReducers = (state = {}, action) => {
  switch (action.type) {
    case COURSES_VIEW_REQUEST:
      return { loading: true };

    case COURSES_VIEW_SUCCESS:
      return { loading: false, courses: action.payload };

    case COURSES_VIEW_FAIL:
      return { loading: false, error: action.payload };

    case COURSES_VIEW_RESET:
     return {};

    default:
      return state;
  }
};

export const courseViewReducers = (state = {}, action) => {
  switch (action.type) {
    case COURSE_VIEW_REQUEST:
      return { loading: true };

    case COURSE_VIEW_SUCCESS:
      return { loading: false, course: action.payload.course, lessons: action.payload.lessons };

    case COURSE_VIEW_FAIL:
      return { loading: false, error: action.payload };

    case COURSE_VIEW_RESET:
      return {};

    default:
      return state;
  }
};

export const topicCreateReducers = (state = {}, action) => {
  switch (action.type) {
    case TOPIC_CREATE_REQUEST:
      return { loading: true };

    case TOPIC_CREATE_SUCCESS:
      return { loading: false, success: true };

    case TOPIC_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const courseEditReducers = (state = {}, action) => {
  switch (action.type) {
    case COURSE_EDIT_REQUEST:
      return { loading: true };

    case COURSE_EDIT_SUCCESS:
      return { loading: false, success: true };

    case COURSE_EDIT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const topicDeleteReducers = (state = {}, action) => {
  switch (action.type) {
    case TOPIC_DELETE_REQUEST:
      return { loading: true };

    case TOPIC_DELETE_SUCCESS:
      return { loading: false, success: true };

    case TOPIC_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};