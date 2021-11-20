import { createSlice } from "@reduxjs/toolkit";

export const selectedUsersDataSlice = createSlice({
  name: "select-user",
  initialState: [],
  reducers: {
    addUser(state, action) {
        state.push(action.payload.user);
        localStorage.setItem("savedSelectedUsers", JSON.stringify(state));     
    },
    removeUser(state, action) {
        const index = state.findIndex(user => user.id === action.payload.user.id);
        state.splice(index, 1);
        localStorage.setItem("savedSelectedUsers", JSON.stringify(state));
    },
    retrieveStorage(state, action) {
      const storage = JSON.parse(localStorage.getItem("savedSelectedUsers"))
      if (storage) {
        storage.forEach(item => state.splice(0, 0, item));
      }
      localStorage.setItem("savedSelectedUsers", JSON.stringify(state));
    }
  }
});

export const { addUser, removeUser, retrieveStorage } =
selectedUsersDataSlice.actions;

export default selectedUsersDataSlice.reducer;
