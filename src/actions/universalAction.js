import { CLOSE_LEFT_BAR, OPEN_LEFT_BAR } from "../reducers/navigationReducer";

export const toggleLeftBar = (newState) =>
  async (dispatch) => {
    try {
      if (newState) {
        // true 
        dispatch( { type: OPEN_LEFT_BAR })
      } else {
        dispatch( { type: CLOSE_LEFT_BAR })
      }
    } catch (error) {
      dispatch({
        type: OPEN_LEFT_BAR,
        payload: error.response.data,
      });
    }
  };