import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_RESET,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_RESET,
  EDIT_PROFILE_SUCCESS,
  VIEW_PROFILE_FAIL,
  VIEW_PROFILE_REQUEST,
  VIEW_PROFILE_RESET,
  VIEW_PROFILE_SUCCESS,
  LOGOUT,
} from "../constants/user";
import { QUIZZES_VIEW_RESET, QUIZ_VIEW_RESET } from "../constants/quiz";
import axios from "axios";
import { COURSES_VIEW_RESET } from "../constants/course";

export const registerUser =
  ({ email, password, name }) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const { data } = await axios.post("/api/register", {
        email,
        password,
        name,
      });

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response.data,
      });
    }
  };

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_LOGOUT_RESET });

      dispatch({
        type: USER_LOGIN_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/login",
        { email: email, password: password },
        config
      );

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error.response.data,
      });
    }
  };

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGOUT_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get("/api/logout", config);

    dispatch({ type: LOGOUT });
    dispatch({ type: COURSES_VIEW_RESET });
    dispatch({ type: VIEW_PROFILE_RESET})
    dispatch({ type: QUIZZES_VIEW_RESET })
    dispatch({ type: QUIZ_VIEW_RESET })

    dispatch({
      type: USER_LOGOUT_SUCCESS,
      payload: data,
    });

    localStorage.removeItem("user");
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload: error.response.data,
    });
  }
};

export const forceLogout = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGOUT_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get("/api/logout", config);

    dispatch({
      type: USER_LOGOUT_SUCCESS,
      payload: { message: "Session Expired. Please login again" },
    });

    dispatch({ type: LOGOUT });
    dispatch({ type: COURSES_VIEW_RESET });
    dispatch({ type: VIEW_PROFILE_RESET})
    dispatch({ type: QUIZZES_VIEW_RESET })
    dispatch({ type: QUIZ_VIEW_RESET })

    localStorage.removeItem("user");
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload: error.response.data,
    });
  }
};

export const editProfile =
  ({
    name,
    examTitle,
    gradeYear,
    school,
    gender,
    phoneNumber,
    address1,
    address2,
    postalCode,
    state,
    country,
    image,
    background,
  }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: EDIT_PROFILE_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.put(
        `/api/myprofile/edit`,
        {
          name,
          examTitle,
          gradeYear,
          school,
          gender,
          phoneNumber,
          address1,
          address2,
          postalCode,
          state,
          country,
          image,
          background,
        },
        config
      );

      dispatch({
        type: EDIT_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EDIT_PROFILE_FAIL,
        payload: error.response.data,
      });
    }
  };

export const viewProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: VIEW_PROFILE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/myprofile`, config);

    dispatch({
      type: VIEW_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VIEW_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};
