import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  
  USER_REGISTER_RESET,

  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_RESET,

  VIEW_PROFILE_REQUEST,
  VIEW_PROFILE_SUCCESS,
  VIEW_PROFILE_FAIL,
  VIEW_PROFILE_RESET,

  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_FAIL,
  LOGOUT,
  USER_LOGOUT_RESET,
} from "../constants/user";

export const userLoginReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, user: action.payload };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case LOGOUT:
      return { };

    default:
      return state;
  }
};

export const userLogoutReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGOUT_REQUEST:
      return { loading: true };

    case USER_LOGOUT_SUCCESS:
      return { loading: false, message: action.payload };

    case USER_LOGOUT_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT_RESET:
      return {}

    default:
      return state;
  }
};


export const userRegisterReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };

    case USER_REGISTER_SUCCESS:
      return { loading: false, user: action.payload };

    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    case USER_REGISTER_RESET:
      return {};

    default:
      return state;
  }
};

export const profileEditReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_PROFILE_REQUEST:
      return { loading: true };

    case EDIT_PROFILE_SUCCESS:
      return { loading: false, success: true };

    case EDIT_PROFILE_FAIL:
      return { loading: false, error: action.payload };

    case EDIT_PROFILE_RESET:
      return {};

    default:
      return state;
  }
};


export const profileViewReducer = (state = {}, action) => {
  switch (action.type) {
    case VIEW_PROFILE_REQUEST:
      return { loading: true };

    case VIEW_PROFILE_SUCCESS:
      return { loading: false, user: action.payload.user };

    case VIEW_PROFILE_FAIL:
      return { loading: false, error: action.payload };

    case VIEW_PROFILE_RESET:
      return {};

    default:
      return state;
  }
};


