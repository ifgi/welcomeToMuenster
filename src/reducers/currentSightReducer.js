import { SET_CURRENT_SIGHT } from "../actions";

const initialState = 0;

const currentSightReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SIGHT:
      state = action.payload.sightId;
      return state;
    default:
      return state;
  }
};

export default currentSightReducer;
