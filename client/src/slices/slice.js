import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: "searchQuery",
  initialState: {
    query: ""
  },

  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload
    }
  },
});

export const {
  setSearchQuery,
} = dataSlice.actions;

export default dataSlice.reducer;
