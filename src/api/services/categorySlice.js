import { createSlice } from "@reduxjs/toolkit";

const initialState = { filterCategory: null };

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setDataCategory(state, action) {
      state.filterCategory = action.payload;
    },
  },
});

export const { setDataCategory } = categorySlice.actions;
export default categorySlice.reducer;
