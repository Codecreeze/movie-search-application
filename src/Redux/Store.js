import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./Slices/SearchSlice";

// Global Store
const store = configureStore({
  reducer: {
    searchQuery: SearchSlice
    },
});
export default store;
