import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "../slices/weatherSlice";
import countrySlice from "../slices/countrySlice";

// import weatherReducer from "../slices/weatherSlices";
// import combineReducer from "../slices/index"

const weatherReducer = weatherSlice.reducer;
const countryReducer = countrySlice.reducer;
const store = configureStore({
  reducer: {
    weatherReducer,
    countryReducer,
  },
});

export default store;
