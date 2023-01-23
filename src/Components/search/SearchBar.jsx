import React from "react";
import "./SearchBar.css";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateSearchTerm } from "../../Redux/Slices/SearchSlice";
import { getApiData } from "../../Redux/AsyncThunk/searchThunk";


// This is a Search bar component

export const SearchBar = (props) => {
  const dispatch = useDispatch();


  const handleChangeSearch = (e) => {
    dispatch(updateSearchTerm(e.target.value));

  };

  const handleSearch = async () => {
    dispatch(getApiData())
  };

  return (
    <div>
      <Box sx={{ display: "flex", ml: { xs: 5, sm: 0 } }}>
        <input
          className="search-bar"
          placeholder="Search..."
          value={props.searchTerm}
          onChange={handleChangeSearch}
          style={{ paddingLeft: 7, border: "3px solid #4682b4", borderRadius: 20 }}
        />
        <Button variant="contained" sx={{ ml: 2, borderRadius: 5, background: "#009999" }} onClick={handleSearch}>Search</Button>
      </Box>
    </div>
  );
};

