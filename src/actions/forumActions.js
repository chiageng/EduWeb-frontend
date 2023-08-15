import {
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_FAIL,

  FORUM_VIEW_SUCCESS,
  FORUM_VIEW_REQUEST,
  FORUM_VIEW_FAIL,

  COMMENT_UPVOTE_SUCCESS,
  COMMENT_UPVOTE_REQUEST,
  COMMENT_UPVOTE_FAIL,

  COMMENT_DOWNVOTE_SUCCESS,
  COMMENT_DOWNVOTE_REQUEST,
  COMMENT_DOWNVOTE_FAIL,
} from "../constants/forum";
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

export const updateForum =
  ({ slug, topicSlug, forumId }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.get(
        `/api/course/${slug}/${topicSlug}/${forumId}`,
        config
      );

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

export const viewForum =
  ({ slug, topicSlug, forumId }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: FORUM_VIEW_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.get(
        `/api/course/${slug}/${topicSlug}/${forumId}`,
        config
      );

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

export const upvoteComment = ({slug, topicSlug, commentId}) => async (dispatch) => {
  try {
    dispatch({
      type: COMMENT_UPVOTE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/course/${slug}/${topicSlug}/${commentId}/upvote`,
      config
    );

    dispatch({
      type: COMMENT_UPVOTE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMMENT_UPVOTE_FAIL,
      payload: error.response.data,
    });
  }
};

export const downvoteComment = ({slug, topicSlug, commentId}) => async (dispatch) => {
  try {
    dispatch({
      type: COMMENT_DOWNVOTE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/course/${slug}/${topicSlug}/${commentId}/downvote`,
      config
    );

    dispatch({
      type: COMMENT_DOWNVOTE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMMENT_DOWNVOTE_FAIL,
      payload: error.response.data,
    });
  }
};
