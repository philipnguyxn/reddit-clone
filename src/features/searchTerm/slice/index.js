// Node Modules
import { createSlice } from '@reduxjs/toolkit';

// searchTermSlice initialization
export const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => {
      return action.payload
    },
    clearSearchTerm: (state, action) => {
      return ''
    }
  },
});

// Slice's Actions
export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;

// Slice's Reducer
export default searchTermSlice.reducer;