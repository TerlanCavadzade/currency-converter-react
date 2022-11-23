import { createSlice } from "@reduxjs/toolkit";

const initialState = { from: "RUB", to: "USD", value: 0 };

const apiDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    setFrom(state, action) {
      state.from = action.payload;
    },
    setTo(state, action) {
      state.to = action.payload;
    },
    setValue(state, action) {
      state.value = action.payload;
    }
  }
});

export const { setFrom, setTo, setValue } = apiDataSlice.actions;

export default apiDataSlice;
