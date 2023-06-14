import { COURSE_CREATE_FAIL, COURSE_CREATE_REQUEST, COURSE_CREATE_SUCCESS } from "../constants/course";

export const courseCreateReducers = (state = {}, action) => {
  switch (action.type) {
    case COURSE_CREATE_REQUEST:
      return { loading: true };

    case COURSE_CREATE_SUCCESS:
      return { loading: false, course: action.payload };

    case COURSE_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};