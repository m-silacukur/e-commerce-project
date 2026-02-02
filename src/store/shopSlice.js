import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 2, 
  totalPages: 3,
  sort: "popularity",
  view: "grid",
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setView(state, action) {
      state.view = action.payload;
    },
  },
});

export const { setPage, setSort, setView } = shopSlice.actions;
export default shopSlice.reducer;
