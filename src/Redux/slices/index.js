import { combineReducers } from "redux";
import { countryReducer } from "./countrySlice";
import { weatherReducer } from "./weatherSlice";

export default combineReducers({
  countryReducer,
  weatherReducer,
});
