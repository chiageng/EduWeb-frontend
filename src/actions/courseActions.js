import {
  COURSE_CREATE_FAIL,
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSES_VIEW_FAIL,
  COURSES_VIEW_REQUEST,
  COURSES_VIEW_SUCCESS,
  COURSE_VIEW_FAIL,
  COURSE_VIEW_REQUEST,
  COURSE_VIEW_SUCCESS,
  TOPIC_CREATE_FAIL,
  TOPIC_CREATE_REQUEST,
  TOPIC_CREATE_SUCCESS,
} from "../constants/course";
import axios from "axios";

export const createCourse =
  ({ title, price, image }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: COURSE_CREATE_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/course/createcourse",
        { title, price, image },
        config
      );

      dispatch({
        type: COURSE_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: COURSE_CREATE_FAIL,
        payload: error.response.data,
      });
    }
  };

export const viewCourses = () => async (dispatch) => {
  try {
    dispatch({
      type: COURSES_VIEW_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get("/api/course", config);

    dispatch({
      type: COURSES_VIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COURSES_VIEW_FAIL,
      payload: error.response.data,
    });
  }
};

export const viewCourse = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: COURSE_VIEW_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/course/${slug}`, config);

    dispatch({
      type: COURSE_VIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COURSE_VIEW_FAIL,
      payload: error.response.data,
    });
  }
};

export const createTopic = (slug, title, video, image) => async (dispatch) => {
  try {
    dispatch({
      type: TOPIC_CREATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(`/api/course/${slug}/createtopic/`, {title, video, image}, config);

    dispatch({
      type: TOPIC_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TOPIC_CREATE_FAIL,
      payload: error.response.data,
    });
  }
};
