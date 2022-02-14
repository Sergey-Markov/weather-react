import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name: "country",
  initialState: { country: [] },
  reducers: {
    addCountry: (state, { payload }) => ({
      ...state,
      country: [...state.country, payload],
    }),
  },
  extraReducers: {},
});
export const countryReducer = countrySlice.reducer;
export default countrySlice;
