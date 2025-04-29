import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { book, qty = 1 } = action.payload;
      const existingItem = state.items.find(
        (item) => item.book._id === book._id
      );

      if (existingItem) {
        existingItem.qty += qty;
      } else {
        state.items.push({ book, qty });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.book.id !== action.payload
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
