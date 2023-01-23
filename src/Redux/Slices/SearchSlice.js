import { createSlice } from "@reduxjs/toolkit";
import { getApiData } from "../AsyncThunk/searchThunk";

// Slice created  for the redux logic
const initialState = {
    loading: false,
    error: null,
    searchTerm: "",
    responseData: [],
};


export const SearchSlice = createSlice({
    name: "searchapp",
    initialState,
    reducers: {
        updateSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    },
    extraReducers: {
        [getApiData.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getApiData.fulfilled]: (state, action) => {
            state.loading = false;
            state.responseData = action.payload;
        },
        [getApiData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }

});


export const { updateSearchTerm } = SearchSlice.actions;

export default SearchSlice.reducer;