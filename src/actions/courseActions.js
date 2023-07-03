import {
  COURSE_CREATE_FAIL,
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSE_EDIT_FAIL,
  COURSE_EDIT_REQUEST,
  COURSE_EDIT_SUCCESS,
  COURSES_VIEW_FAIL,
  COURSES_VIEW_REQUEST,
  COURSES_VIEW_SUCCESS,
  COURSES_PRICE_VIEW_FAIL,
  COURSES_PRICE_VIEW_REQUEST,
  COURSES_PRICE_VIEW_SUCCESS,
  COURSE_VIEW_FAIL,
  COURSE_VIEW_REQUEST,
  COURSE_VIEW_SUCCESS,
  TOPIC_CREATE_FAIL,
  TOPIC_CREATE_REQUEST,
  TOPIC_CREATE_SUCCESS,
  TOPIC_EDIT_FAIL,
  TOPIC_EDIT_REQUEST,
  TOPIC_EDIT_SUCCESS,
  TOPIC_DELETE_FAIL,
  TOPIC_DELETE_REQUEST,
  TOPIC_DELETE_SUCCESS,
  TOPIC_VIEW_FAIL,
  TOPIC_VIEW_REQUEST,
  TOPIC_VIEW_SUCCESS,
  CHECK_ENROLL_FAIL,
  CHECK_ENROLL_REQUEST,
  CHECK_ENROLL_SUCCESS,
  COURSE_ENROLL_FAIL,
  COURSE_ENROLL_REQUEST,
  COURSE_ENROLL_SUCCESS,
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
    const { data } = await axios.get("/api/instructor/courses", config);

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

export const userViewCourses = () => async (dispatch) => {
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

export const viewPriceCourses = () => async (dispatch) => {
  try {
    dispatch({
      type: COURSES_PRICE_VIEW_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get("/api/courses", config);

    dispatch({
      type: COURSES_PRICE_VIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COURSES_PRICE_VIEW_FAIL,
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

export const viewPriceCourse = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: COURSE_VIEW_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/course/cart/${slug}`, config);

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
    const { data } = await axios.post(
      `/api/course/${slug}/createtopic/`,
      { title, video, image },
      config
    );

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

export const editCourse =
  ({ slug, title, price, image }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: COURSE_EDIT_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.put(
        `/api/course/${slug}/editcourse`,
        { title, price, image },
        config
      );

      dispatch({
        type: COURSE_EDIT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: COURSE_EDIT_FAIL,
        payload: error.response.data,
      });
    }
  };

export const deleteTopic =
  ({ slug, lesson_id, title, price, image }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: TOPIC_DELETE_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.put(
        `/api/course/${slug}/${lesson_id}`,
        config
      );

      dispatch({
        type: TOPIC_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TOPIC_DELETE_FAIL,
        payload: error.response.data,
      });
    }
  };

export const editTopic =
  ({ slug, lesson_id, title, video, image }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: TOPIC_EDIT_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `/api/course/${slug}/${lesson_id}/edit`,
        { title, video, image },
        config
      );

      dispatch({
        type: TOPIC_EDIT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TOPIC_EDIT_FAIL,
        payload: error.response.data,
      });
    }
  };

export const viewTopic =
  ({ slug, lesson_id }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: TOPIC_VIEW_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.get(
        `/api/course/${slug}/${lesson_id}/view`,
        config
      );

      dispatch({
        type: TOPIC_VIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TOPIC_VIEW_FAIL,
        payload: error.response.data,
      });
    }
  };

export const checkEnroll = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: CHECK_ENROLL_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/course/cart/${slug}/check`, config);

    dispatch({
      type: CHECK_ENROLL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CHECK_ENROLL_FAIL,
      payload: error.response.data,
    });
  }
};

export const enrollCourse = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: COURSE_ENROLL_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(`/api/course/cart/${slug}/enroll`, config);

    dispatch({
      type: COURSE_ENROLL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COURSE_ENROLL_FAIL,
      payload: error.response.data,
    });
  }
};
