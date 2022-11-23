import { configureStore } from "@reduxjs/toolkit";
import apiDataSlice from "./apiDataSlice";
import { querySlice } from "./QuerySlice";

const store = configureStore({
  reducer: {
    apiData: apiDataSlice.reducer,
    [querySlice.reducerPath]: querySlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(querySlice.middleware)
});

export default store;
