import { COMMENT_CREATE_SUCCESS, COMMENT_CREATE_REQUEST, COMMENT_CREATE_FAIL, FORUM_VIEW_SUCCESS, FORUM_VIEW_REQUEST, FORUM_VIEW_FAIL, } from "../constants/forum";
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

export const updateForum = ({slug, topicSlug, forumId}) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.get(`/api/course/${slug}/${topicSlug}/${forumId}`, config);
  
      dispatch({
        type: FORUM_VIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FORUM_VIEW_FAIL,
        payload: error.response.data,
      });
    }
};

export const viewForum = ({slug, topicSlug, forumId}) => async (dispatch) => {
  try {
    dispatch({
      type: FORUM_VIEW_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/course/${slug}/${topicSlug}/${forumId}`, config);

    dispatch({
      type: FORUM_VIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORUM_VIEW_FAIL,
      payload: error.response.data,
    });
  }
};
