import {
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,

  DELETE_IMAGE_REQUEST,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_FAIL,

  DELETE_VIDEO_REQUEST,
  DELETE_VIDEO_SUCCESS,
  DELETE_VIDEO_FAIL,

  UPLOAD_VIDEO_REQUEST,
  UPLOAD_VIDEO_SUCCESS,
  UPLOAD_VIDEO_FAIL,
} from "../constants/upload";

export const imageUploadReducers = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE_REQUEST:
      return { loading: true };

    case UPLOAD_IMAGE_SUCCESS:
      return { loading: false, image: action.payload };

    case UPLOAD_IMAGE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const imageDeleteReducers = (state = {}, action) => {
  switch (action.type) {
    case DELETE_IMAGE_REQUEST:
      return { loading: true };

    case DELETE_IMAGE_SUCCESS:
      return { loading: false, success: true };

    case DELETE_IMAGE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const videoUploadReducers = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_VIDEO_REQUEST:
      return { loading: true };

    case UPLOAD_VIDEO_SUCCESS:
      return { loading: false, video: action.payload };

    case UPLOAD_VIDEO_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const videoDeleteReducers = (state = {}, action) => {
  switch (action.type) {
    case DELETE_VIDEO_REQUEST:
      return { loading: true };

    case DELETE_VIDEO_SUCCESS:
      return { loading: false, success: true };

    case DELETE_VIDEO_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
