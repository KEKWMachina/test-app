import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import selectedUsersReduer from "./selectedUsersSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    selectedUsers: selectedUsersReduer
  },
});
