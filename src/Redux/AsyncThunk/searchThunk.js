import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// Asynchronous task for the redux logic and api fetching

export const getApiData = createAsyncThunk(
    "apiData/getApiData",
    async (arg, { getState }) => {
        const state = getState();
        const SEARCHVALUE = state.searchQuery.searchTerm;
        try {
            const { data } = await axios.get(
                `https://api.tvmaze.com/search/shows?q=${SEARCHVALUE}`
            );
            return data;
        } catch (error) {
            return error;
        }
    }
);