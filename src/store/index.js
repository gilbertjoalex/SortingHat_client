import { configureStore } from "@reduxjs/toolkit";
import reduceAllHouses from "./hoghouse/slice";

export default configureStore({
  reducer: {
    hoghouses: reduceAllHouses,
  },
});
