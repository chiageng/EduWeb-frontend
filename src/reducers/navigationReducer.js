export const OPEN_LEFT_BAR = "OPEN_LEFT_BAR"
export const CLOSE_LEFT_BAR = "CLOSE_LEFT_BAR"


export const LeftBarReducers = (state = {}, action) => {
  switch (action.type) {
    case OPEN_LEFT_BAR:
      return { open: true };

    case CLOSE_LEFT_BAR:
      return { open: false };

    default:
      return state;
  }
};