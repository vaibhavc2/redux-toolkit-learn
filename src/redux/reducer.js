import { createReducer } from "@reduxjs/toolkit";

export const firstReducer = createReducer(
  {
    coins: []
  },
  {
    myFirstCase: (state, action) => {
      // (myFirstCase -> action.type)
      state.coins = action.payload;
    }
  }
);
