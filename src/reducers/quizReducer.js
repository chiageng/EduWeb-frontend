import {
  QUIZ_CREATE_FAIL,
  QUIZ_CREATE_REQUEST,
  QUIZ_CREATE_SUCCESS,
  QUIZ_CREATE_RESET,

  QUIZ_EDIT_FAIL,
  QUIZ_EDIT_REQUEST,
  QUIZ_EDIT_SUCCESS,
  QUIZ_EDIT_RESET,

  QUIZZES_VIEW_FAIL,
  QUIZZES_VIEW_REQUEST,
  QUIZZES_VIEW_SUCCESS,
  QUIZZES_VIEW_RESET,
  QUIZ_VIEW_FAIL,
  QUIZ_VIEW_REQUEST,
  QUIZ_VIEW_SUCCESS,
  QUIZ_VIEW_RESET,

  QUIZ_SAVE_FAIL,
  QUIZ_SAVE_REQUEST,
  QUIZ_SAVE_SUCCESS,
  QUIZ_SAVE_RESET,

  QUIZ_DELETE_FAIL,
  QUIZ_DELETE_REQUEST,
  QUIZ_DELETE_SUCCESS,
  QUIZ_DELETE_RESET,

  QUIZ_QUESTION_CREATE_FAIL,
  QUIZ_QUESTION_CREATE_REQUEST,
  QUIZ_QUESTION_CREATE_SUCCESS,
  QUIZ_QUESTION_CREATE_RESET,
  QUIZ_QUESTION_VIEW_FAIL,

  QUIZ_QUESTION_VIEW_REQUEST,
  QUIZ_QUESTION_VIEW_SUCCESS,
  QUIZ_QUESTION_VIEW_RESET,

  QUIZ_QUESTION_EDIT_FAIL,
  QUIZ_QUESTION_EDIT_REQUEST,
  QUIZ_QUESTION_EDIT_SUCCESS,
  QUIZ_QUESTION_EDIT_RESET,

  QUIZ_QUESTION_DELETE_FAIL,
  QUIZ_QUESTION_DELETE_REQUEST,
  QUIZ_QUESTION_DELETE_SUCCESS,
  QUIZ_QUESTION_DELETE_RESET,
} from "../constants/quiz";

export const quizCreateReducers = (state = {}, action) => {
  switch (action.type) {
    case QUIZ_CREATE_REQUEST:
      return { loading: true };

    case QUIZ_CREATE_SUCCESS:
      return { loading: false, success: true };

    case QUIZ_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case QUIZ_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const quizEditReducers = (state = {}, action) => {
  switch (action.type) {
    case QUIZ_EDIT_REQUEST:
      return { loading: true };

    case QUIZ_EDIT_SUCCESS:
      return { loading: false, success: true };

    case QUIZ_EDIT_FAIL:
      return { loading: false, error: action.payload };

    case QUIZ_EDIT_RESET:
      return {};

    default:
      return state;
  }
};

export const quizzesViewReducers = (state = {}, action) => {
  switch (action.type) {
    case QUIZZES_VIEW_REQUEST:
      return { loading: true };

    case QUIZZES_VIEW_SUCCESS:
      return {
        loading: false,
        course: action.payload.course,
        quizzes: action.payload.quizzes,
      };

    case QUIZZES_VIEW_FAIL:
      return { loading: false, error: action.payload };

    case QUIZZES_VIEW_RESET:
      return {};

    default:
      return state;
  }
};

export const quizViewReducers = (state = {}, action) => {
  switch (action.type) {
    case QUIZ_VIEW_REQUEST:
      return { loading: true };

    case QUIZ_VIEW_SUCCESS:
      return {
        loading: false,
        course: action.payload.course,
        quiz: action.payload.quiz,
        questions: action.payload.questions,
        solutions: action.payload.solutions,
        userQuiz: action.payload.userQuiz,
      };

    case QUIZ_VIEW_FAIL:
      return { loading: false, error: action.payload };

    case QUIZ_VIEW_RESET:
      return {};

    default:
      return state;
  }
};

export const quizQuestionCreateReducers = (state = {}, action) => {
  switch (action.type) {
    case QUIZ_QUESTION_CREATE_REQUEST:
      return { loading: true };

    case QUIZ_QUESTION_CREATE_SUCCESS:
      return { loading: false, success: true };

    case QUIZ_QUESTION_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case QUIZ_QUESTION_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const quizQuestionViewReducers = (state = {}, action) => {
  switch (action.type) {
    case QUIZ_QUESTION_VIEW_REQUEST:
      return { loading: true };

    case QUIZ_QUESTION_VIEW_SUCCESS:
      return {
        loading: false,
        question: action.payload.question,
        choices: action.payload.choices,
      };

    case QUIZ_QUESTION_VIEW_FAIL:
      return { loading: false, error: action.payload };

    case QUIZ_QUESTION_VIEW_RESET:
      return {};

    default:
      return state;
  }
};

export const quizQuestionEditReducers = (state = {}, action) => {
  switch (action.type) {
    case QUIZ_QUESTION_EDIT_REQUEST:
      return { loading: true };

    case QUIZ_QUESTION_EDIT_SUCCESS:
      return { loading: false, success: true };

    case QUIZ_QUESTION_EDIT_FAIL:
      return { loading: false, error: action.payload };

    case QUIZ_QUESTION_EDIT_RESET:
      return {};

    default:
      return state;
  }
};

export const quizQuestionDeleteReducers = (state = {}, action) => {
  switch (action.type) {
    case QUIZ_QUESTION_DELETE_REQUEST:
      return { loading: true };

    case QUIZ_QUESTION_DELETE_SUCCESS:
      return { loading: false, success: true };

    case QUIZ_QUESTION_DELETE_FAIL:
      return { loading: false, error: action.payload };

    case QUIZ_QUESTION_DELETE_RESET:
      return {};

    default:
      return state;
  }
};

export const quizSaveReducers = (state = {}, action) => {
  switch (action.type) {
    case QUIZ_SAVE_REQUEST:
      return { loading: true };

    case QUIZ_SAVE_SUCCESS:
      return {
        loading: false,
        success: true
      };

    case QUIZ_SAVE_FAIL:
      return { loading: false, error: action.payload };

    case QUIZ_SAVE_RESET:
      return {};

    default:
      return state;
  }
};

export const quizDeleteReducers = (state = {}, action) => {
  switch (action.type) {
    case QUIZ_DELETE_REQUEST:
      return { loading: true };

    case QUIZ_DELETE_SUCCESS:
      return {
        loading: false,
        success: true
      };

    case QUIZ_DELETE_FAIL:
      return { loading: false, error: action.payload };

    case QUIZ_DELETE_RESET:
      return {};

    default:
      return state;
  }
};