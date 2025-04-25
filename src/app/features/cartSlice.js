import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // {book:{image,name,price,id}, qty}
      const existingItem = state.items.find(
        (item) => item.book.id === action.payload.book.id
      );
      if (existingItem) {
        existingItem.qty += action.payload.qty;
        return;
      }
      action.payload.qty = 1;
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.book.id !== action.payload
      );
    },
    // changeItemQty: (state, action) => {
    //   // {bookId, qty}
    //   const item = state.items.find(
    //     (item) => item.book.id === action.payload.bookId
    //   );
    // },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
