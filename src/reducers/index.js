import { combineReducers } from "redux";
import languageReducer from "./languageReducer.js";

const rootReducer = combineReducers({
  language: languageReducer,
});

export default rootReducer;
