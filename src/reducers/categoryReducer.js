import { SET_CATEGORY } from "../actions";

const initialState = {
  food: true,
  info: true,
  fun: true,
  culture: true,
  sights: true,
  nature: true,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      let cat = action.payload.category;
      let newState =  {
        food: state["food"],
        info: state["info"],
        fun: state["fun"],
        culture: state["culture"],
        sights: state["sights"],
        nature: state["nature"],
      };
      newState[cat] = !newState[cat];
      return newState;
    default:
      return state;
  }
};

export default categoryReducer;
