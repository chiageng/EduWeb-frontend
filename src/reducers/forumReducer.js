import { COMMENT_CREATE_SUCCESS, COMMENT_CREATE_REQUEST, COMMENT_CREATE_FAIL, COMMENT_CREATE_RESET } from "../constants/forum";

export const commentCreateReducers = (state = {}, action) => {
  switch (action.type) {
    case COMMENT_CREATE_REQUEST:
      return { loading: true };

    case COMMENT_CREATE_SUCCESS:
      return { loading: false, success: true };

    case COMMENT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    
    case COMMENT_CREATE_RESET:
      return { }

    default:
      return state;
  }
};