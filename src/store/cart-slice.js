import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed:false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      state.totalQuantity++;
      state.changed =true;
      if (!existingItem) {
        state.items.push({
          _id: newItem._id,
          name:newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemfromCart(state, action) {
        const _id = action.payload;
        const newItem = action.payload;
        console.log(":::::: NEW ITEM :::::::::", newItem);
        const existingItem = state.items.find((item) => item._id === _id);

        state.totalQuantity--;
        state.changed = true;
        if(existingItem?.quantity === 1){
            state.items =state.items.filter((item) => item._id !==_id);
            // existingItem.totalPrice = existingItem.totalPrice - newItem.price;
        } else {
            existingItem.quantity--;
        }
    },
  },
});


export const cartActions = cartSlice.actions;
export default cartSlice;