import { COURSE_CREATE_FAIL, COURSE_CREATE_REQUEST, COURSE_CREATE_SUCCESS } from "../constants/course";
import axios from "axios";

export const createCourse = ({title, price, image}) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COURSE_CREATE_REQUEST,
    });

    const {userLogin: {user}} = getState() 

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/course/createcourse",
      { title, price, image, user },
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