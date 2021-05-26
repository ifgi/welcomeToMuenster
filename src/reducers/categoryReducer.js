import { SET_CATEGORY } from "../actions";

const initialState = {
  food: false,
  info: false,
  fun: false,
  culture: false,
  sights: false,
  nature: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      let cat = action.payload.category;
      state[cat] = !state[cat];
      return state;
    default:
      return state;
  }
};

export default categoryReducer;
