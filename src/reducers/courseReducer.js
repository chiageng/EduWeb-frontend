import {
  COURSE_CREATE_FAIL,
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSE_CREATE_RESET,

  COURSE_DELETE_FAIL,
  COURSE_DELETE_REQUEST,
  COURSE_DELETE_SUCCESS,
  COURSE_DELETE_RESET,

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

  
  COURSES_PRICE_VIEW_FAIL,
  COURSES_PRICE_VIEW_REQUEST,
  COURSES_PRICE_VIEW_RESET,
  COURSES_PRICE_VIEW_SUCCESS,

  TOPIC_CREATE_FAIL,
  TOPIC_CREATE_REQUEST,
  TOPIC_CREATE_SUCCESS,
  TOPIC_CREATE_RESET,

  TOPIC_DELETE_FAIL,
  TOPIC_DELETE_REQUEST,
  TOPIC_DELETE_SUCCESS,
  COURSE_EDIT_RESET,

  TOPIC_EDIT_FAIL,
  TOPIC_EDIT_REQUEST,
  TOPIC_EDIT_SUCCESS,
  TOPIC_EDIT_RESET,

  TOPIC_VIEW_FAIL,
  TOPIC_VIEW_REQUEST,
  TOPIC_VIEW_SUCCESS,
  TOPIC_VIEW_RESET,

  CHECK_ENROLL_FAIL,
  CHECK_ENROLL_REQUEST,
  CHECK_ENROLL_SUCCESS,

  CHECK_STUDENTS_ENROLLMENT_FAIL,
  CHECK_STUDENTS_ENROLLMENT_REQUEST,
  CHECK_STUDENTS_ENROLLMENT_SUCCESS,

  APPROVE_STUDENTS_ENROLLMENT_FAIL,
  APPROVE_STUDENTS_ENROLLMENT_REQUEST,
  APPROVE_STUDENTS_ENROLLMENT_SUCCESS,

  REMOVE_STUDENTS_ENROLLMENT_FAIL,
  REMOVE_STUDENTS_ENROLLMENT_REQUEST,
  REMOVE_STUDENTS_ENROLLMENT_SUCCESS,

  COURSE_ENROLL_FAIL,
  COURSE_ENROLL_REQUEST,
  COURSE_ENROLL_SUCCESS,

  WATCH_VIDEO_FAIL,
  WATCH_VIDEO_REQUEST,
  WATCH_VIDEO_SUCCESS,
  WATCH_VIDEO_RESET,

  CREATE_REVIEW_FAIL,
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_RESET,

  VIEW_REVIEWS_FAIL,
  VIEW_REVIEWS_REQUEST,
  VIEW_REVIEWS_SUCCESS,
  VIEW_REVIEWS_RESET,
  TOPIC_DELETE_RESET,

} from "../constants/course";

export const courseCreateReducers = (state = {}, action) => {
  switch (action.type) {
    case COURSE_CREATE_REQUEST:
      return { loading: true };

    case COURSE_CREATE_SUCCESS:
      return { loading: false, success: true };

    case COURSE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    
    case COURSE_CREATE_RESET:
      return { };

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

export const coursesPriceViewReducers = (state = {}, action) => {
  switch (action.type) {
    case COURSES_PRICE_VIEW_REQUEST:
      return { loading: true };

    case COURSES_PRICE_VIEW_SUCCESS:
      return { loading: false, courses: action.payload };

    case COURSES_PRICE_VIEW_FAIL:
      return { loading: false, error: action.payload };

    case COURSES_PRICE_VIEW_RESET:
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
    
    case TOPIC_CREATE_RESET:
      return { };

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

    case COURSE_EDIT_RESET:
      return {}

    default:
      return state;
  }
};

export const courseDeleteReducers = (state = {}, action) => {
  switch (action.type) {
    case COURSE_DELETE_REQUEST:
      return { loading: true };

    case COURSE_DELETE_SUCCESS:
      return { loading: false, success: true };

    case COURSE_DELETE_FAIL:
      return { loading: false, error: action.payload };

    case COURSE_DELETE_RESET:
      return { }
      
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

    case TOPIC_DELETE_RESET:
      return { }
      
    default:
      return state;
  }
};

export const topicViewReducers = (state = {}, action) => {
  switch (action.type) {
    case TOPIC_VIEW_REQUEST:
      return { loading: true };

    case TOPIC_VIEW_SUCCESS:
      return { loading: false, topic: action.payload };

    case TOPIC_VIEW_FAIL:
      return { loading: false, error: action.payload };

    case TOPIC_VIEW_RESET:
      return {}
      
    default:
      return state;
  }
};

export const topicEditReducers = (state = {}, action) => {
  switch (action.type) {
    case TOPIC_EDIT_REQUEST:
      return { loading: true };

    case TOPIC_EDIT_SUCCESS:
      return { loading: false, success: true };

    case TOPIC_EDIT_FAIL:
      return { loading: false, error: action.payload };

    case TOPIC_EDIT_RESET:
      return {}
      
    default:
      return state;
  }
};

export const checkEnrolledReducers = (state = {}, action) => {
  switch (action.type) {
    case CHECK_ENROLL_REQUEST:
      return { loading: true };

    case CHECK_ENROLL_SUCCESS:
      return { loading: false, enrollment: action.payload };

    case CHECK_ENROLL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

export const checkStudentsEnrollmentReducers = (state = {}, action) => {
  switch (action.type) {
    case CHECK_STUDENTS_ENROLLMENT_REQUEST:
      return { loading: true };

    case CHECK_STUDENTS_ENROLLMENT_SUCCESS:
      return { loading: false, enrollment: action.payload };

    case CHECK_STUDENTS_ENROLLMENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

export const approveStudentsEnrollmentReducers = (state = {}, action) => {
  switch (action.type) {
    case APPROVE_STUDENTS_ENROLLMENT_REQUEST:
      return { loading: true };

    case APPROVE_STUDENTS_ENROLLMENT_SUCCESS:
      return { loading: false, success: true };

    case APPROVE_STUDENTS_ENROLLMENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

export const removeStudentsEnrollmentReducers = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_STUDENTS_ENROLLMENT_REQUEST:
      return { loading: true };

    case REMOVE_STUDENTS_ENROLLMENT_SUCCESS:
      return { loading: false, success: true };

    case REMOVE_STUDENTS_ENROLLMENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}


export const courseEnrollReducers = (state = {}, action) => {
  switch (action.type) {
    case COURSE_ENROLL_REQUEST:
      return { loading: true };

    case COURSE_ENROLL_SUCCESS:
      return { loading: false, success: true };

    case COURSE_ENROLL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

export const videoWatchReducers = (state = {}, action) => {
  switch (action.type) {
    case WATCH_VIDEO_REQUEST:
      return { loading: true };

    case WATCH_VIDEO_SUCCESS:
      return { loading: false, course: action.payload.course, lessons: action.payload.lessons, lesson: action.payload.lesson };

    case WATCH_VIDEO_FAIL:
      return { loading: false, error: action.payload };

    case WATCH_VIDEO_RESET:
      return { }

    default:
      return state;
  }
}

export const reviewCreateReducers = (state = {}, action) => {
  switch (action.type) {
    case CREATE_REVIEW_REQUEST:
      return { loading: true };

    case CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };

    case CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };

    case CREATE_REVIEW_RESET:
      return { }

    default:
      return state;
  }
}

export const reviewsViewReducers = (state = {}, action) => {
  switch (action.type) {
    case VIEW_REVIEWS_REQUEST:
      return { loading: true };

    case VIEW_REVIEWS_SUCCESS:
      return { loading: false, reviews: action.payload };

    case VIEW_REVIEWS_FAIL:
      return { loading: false, error: action.payload };

    case VIEW_REVIEWS_RESET:
      return { }

    default:
      return state;
  }
}
