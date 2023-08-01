import {
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_FAIL,
  COMMENT_CREATE_RESET,

  FORUM_VIEW_SUCCESS,
  FORUM_VIEW_REQUEST,
  FORUM_VIEW_FAIL,
  FORUM_VIEW_RESET,
} from "../constants/forum";

export const commentCreateReducers = (state = {}, action) => {
  switch (action.type) {
    case COMMENT_CREATE_REQUEST:
      return { loading: true };

    case COMMENT_CREATE_SUCCESS:
      return { loading: false, success: true };

    case COMMENT_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case COMMENT_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const forumViewReducers = (state = {}, action) => {
  switch (action.type) {
    case FORUM_VIEW_REQUEST:
      return { loading: true };

    case FORUM_VIEW_SUCCESS:
      return { loading: false, forum: action.payload };

    case FORUM_VIEW_FAIL:
      return { loading: false, error: action.payload };

    case FORUM_VIEW_RESET:
      return {};

    default:
      return state;
  }
};
