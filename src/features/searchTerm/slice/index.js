// Node Modules
import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

// searchTermSlice initialization
export const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      return action.payload
    },
    clearSearchTerm: (state, action) => {
      return ''
    }
  },
});

export { initialState as searchTermSliceInitialState };

// Slice's Actions
export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;

// Slice's Reducer
export default searchTermSlice.reducer;