import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer.js";
import languageReducer from "./languageReducer.js";
import pointReducer from "./pointsReducer.js";
import currentSightReducer from "./currentSightReducer.js";

const rootReducer = combineReducers({
  language: languageReducer,
  categories: categoryReducer,
  points: pointReducer,
  currentSight: currentSightReducer,
});

export default rootReducer;
