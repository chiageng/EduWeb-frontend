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
  
  USER_REGISTER_RESET,

  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_RESET,
  LOGOUT,

} from "../constants/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const registerUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const { data } = await axios.post("/api/register", {
        email,
        password,
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

export const loginUser = ({email, password}) => async (dispatch) => {
  try {
    dispatch({type: USER_LOGOUT_RESET})

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
    const { data } = await axios.get(
      "/api/logout",
      config
    );

    dispatch({
      type: USER_LOGOUT_SUCCESS,
      payload: data,
    });

    dispatch({type: LOGOUT})

    localStorage.removeItem("user");

  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload: error.response.data,
    });
  }
}

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
    const { data } = await axios.get(
      "/api/logout",
      config
    );

    dispatch({
      type: USER_LOGOUT_SUCCESS,
      payload: {message: "Session Expired. Please login again"},
    });

    dispatch({type: LOGOUT})

    localStorage.removeItem("user");

  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload: error.response.data,
    });
  }
}

// replicate
// export const getUserProfile = () => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_PROFILE_REQUEST,
//     });

//     const {userLogin: {user}} = getState();

//     const config = {
//       headers: {
//         "Content-type": "application/json",
//         Authorization: `Bearer ${user.accessToken}`
//       },
//     };
//     const { data } = await axios.get(
//       `http://localhost:8000/api/myprofile`,
//       config,
//     );

//     dispatch({
//       type: USER_PROFILE_SUCCESS,
//       payload: data
//     })	


//   } catch (error) {
//     dispatch({
//       type: USER_PROFILE_FAIL,
//       payload: error.response.data,
//     });
//   }
// };