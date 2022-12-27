import { createSlice } from "@reduxjs/toolkit";

const initialState = { houses: undefined };
export const hogHouseSlice = createSlice({
  name: "hogHouses",
  initialState,
  reducers: {
    reduceAllHouses: (state, action) => {
      // console.log(action, "This is my action"); //TEST 2. Create action and see if this shows up. Go back to thunk.
      state.houses = action.payload;
      console.log(action.payload, "action payys"); // STEP 3 - CREATE REDUX STATE - the console.logged action will describe what is the type and payload of the state. CREATE SELECTOR
    },

    // addBid: (state, action) => {
    //   const { email, amount } = action.payload.bids;
    //   const bid = { email, amount };
    //   state.artworks.artworkDetails.unshift(bid);
    // },
  },
});

export const { reduceAllHouses } = hogHouseSlice.actions;
export default hogHouseSlice.reducer;
