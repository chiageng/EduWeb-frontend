import {
  QUIZ_CREATE_FAIL,
  QUIZ_CREATE_REQUEST,
  QUIZ_CREATE_SUCCESS,
  QUIZZES_VIEW_FAIL,
  QUIZZES_VIEW_REQUEST,
  QUIZZES_VIEW_SUCCESS,
  QUIZ_VIEW_FAIL,
  QUIZ_VIEW_REQUEST,
  QUIZ_VIEW_SUCCESS,
  QUIZ_QUESTION_CREATE_FAIL,
  QUIZ_QUESTION_CREATE_REQUEST,
  QUIZ_QUESTION_CREATE_SUCCESS,
  QUIZ_QUESTION_VIEW_FAIL,
  QUIZ_QUESTION_VIEW_REQUEST,
  QUIZ_QUESTION_VIEW_SUCCESS,
  QUIZ_QUESTION_EDIT_FAIL,
  QUIZ_QUESTION_EDIT_REQUEST,
  QUIZ_QUESTION_EDIT_SUCCESS,
  QUIZ_QUESTION_DELETE_FAIL,
  QUIZ_QUESTION_DELETE_REQUEST,
  QUIZ_QUESTION_DELETE_SUCCESS,

  QUIZ_SAVE_FAIL,
  QUIZ_SAVE_REQUEST,
  QUIZ_SAVE_SUCCESS,
} from "../constants/quiz";
import axios from "axios";

export const createQuiz = (slug, title) => async (dispatch) => {
  try {
    dispatch({
      type: QUIZ_CREATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/course/${slug}/quiz/create`,
      { title },
      config
    );

    dispatch({
      type: QUIZ_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: QUIZ_CREATE_FAIL,
      payload: error.response.data,
    });
  }
};

export const viewQuizzes = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: QUIZZES_VIEW_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/course/${slug}/quizzes`, config);

    dispatch({
      type: QUIZZES_VIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: QUIZZES_VIEW_FAIL,
      payload: error.response.data,
    });
  }
};

export const viewUserQuizzes = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: QUIZZES_VIEW_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      `/api/user/course/${slug}/quizzes`,
      config
    );

    dispatch({
      type: QUIZZES_VIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: QUIZZES_VIEW_FAIL,
      payload: error.response.data,
    });
  }
};

export const viewQuiz = (slug, quizSlug) => async (dispatch) => {
  try {
    dispatch({
      type: QUIZ_VIEW_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      `/api/course/${slug}/quiz/${quizSlug}`,
      config
    );

    dispatch({
      type: QUIZ_VIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: QUIZ_VIEW_FAIL,
      payload: error.response.data,
    });
  }
};

export const userViewQuiz = (slug, quizSlug) => async (dispatch) => {
  try {
    dispatch({
      type: QUIZ_VIEW_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      `/api/user/course/${slug}/quizzes/${quizSlug}`,
      config
    );

    dispatch({
      type: QUIZ_VIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: QUIZ_VIEW_FAIL,
      payload: error.response.data,
    });
  }
};

export const createQuizQuestion =
  ({ slug, quizSlug, question, choices, explanation, answer, image }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: QUIZ_QUESTION_CREATE_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `/api/course/${slug}/quiz/${quizSlug}/createquestion`,
        { question, choices, explanation, answer, image },
        config
      );

      dispatch({
        type: QUIZ_QUESTION_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: QUIZ_QUESTION_CREATE_FAIL,
        payload: error.response.data,
      });
    }
  };

export const viewQuizQuestion =
  (slug, quizSlug, questionId) => async (dispatch) => {
    try {
      dispatch({
        type: QUIZ_QUESTION_VIEW_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.get(
        `/api/course/${slug}/quiz/${quizSlug}/view/${questionId}`,
        config
      );

      dispatch({
        type: QUIZ_QUESTION_VIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: QUIZ_QUESTION_VIEW_FAIL,
        payload: error.response.data,
      });
    }
  };

export const editQuizQuestion =
  ({
    slug,
    quizSlug,
    question,
    choices,
    explanation,
    answer,
    questionId,
    image,
  }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: QUIZ_QUESTION_EDIT_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.put(
        `/api/course/${slug}/quiz/${quizSlug}/edit/${questionId}`,
        { question, choices, explanation, answer, image },
        config
      );

      dispatch({
        type: QUIZ_QUESTION_EDIT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: QUIZ_QUESTION_EDIT_FAIL,
        payload: error.response.data,
      });
    }
  };

export const deleteQuizQuestion =
  ({ slug, quizSlug, questionId }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: QUIZ_QUESTION_DELETE_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.put(
        `/api/course/${slug}/quiz/${quizSlug}/delete/${questionId}`,
        config
      );

      dispatch({
        type: QUIZ_QUESTION_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: QUIZ_QUESTION_DELETE_FAIL,
        payload: error.response.data,
      });
    }
  };

export const userSaveQuiz = ({slug, quizSlug, quizId, score, solutions}) => async (dispatch) => {
  try {
    dispatch({
      type: QUIZ_SAVE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/api/user/course/${slug}/quizzes/${quizSlug}/${quizId}`,
      {score, solutions},
      config
    );

    dispatch({
      type: QUIZ_SAVE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: QUIZ_SAVE_FAIL,
      payload: error.response.data,
    });
  }
};
