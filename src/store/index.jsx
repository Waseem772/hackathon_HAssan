import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import userDataSlice from "./slices/userDataSlice";
import userLoggedSlice from "./slices/userLoggedSlice";
import bloodGroupSlice from "./slices/bloodGroupSlice";

const store = configureStore({
  reducer: {
    userData: userDataSlice,
    userLogged: userLoggedSlice,
    theme: themeSlice,
    bloodGroup: bloodGroupSlice,
  },
});
export default store;
