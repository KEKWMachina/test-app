import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersData = createAsyncThunk(
  "users/getUserData",
  async () => {
    const response = await fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users");
    if (response.ok) {
      const cardData = await response.json();
      return { cardData };
    }
  }
);

export const usersDataSlice = createSlice({
  name: "set-user-data",
  initialState: [],
  extraReducers: {
    [getUsersData.fulfilled]: (state, action) => {
      if(state.length < 1) {
        state.push(action.payload.cardData);
      }
    },
  },
});

export const { setUsersData } =
usersDataSlice.actions;

export default usersDataSlice.reducer;
