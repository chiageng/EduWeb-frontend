import { COMMENT_CREATE_SUCCESS, COMMENT_CREATE_REQUEST, COMMENT_CREATE_FAIL } from "../constants/forum";
import { WATCH_VIDEO_SUCCESS, WATCH_VIDEO_FAIL } from "../constants/course";
import axios from "axios";

export const createComment =
  ({ course, lesson, comment }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: COMMENT_CREATE_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `/api/course/${course}/createComment/${lesson}`,
        { comment },
        config
      );

      dispatch({
        type: COMMENT_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: COMMENT_CREATE_FAIL,
        payload: error.response.data,
      });
    }
  };

export const updateForum = ({slug, topicSlug}) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.get(`/api/course/${slug}/${topicSlug}`, config);
  
      dispatch({
        type: WATCH_VIDEO_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: WATCH_VIDEO_FAIL,
        payload: error.response.data,
      });
    }
};

export const userUpdateForum = ({slug, topicSlug}) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/user/course/${slug}/${topicSlug}`, config);

    dispatch({
      type: WATCH_VIDEO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WATCH_VIDEO_FAIL,
      payload: error.response.data,
    });
  }
};