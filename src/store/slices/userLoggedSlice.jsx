import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  loginSuccess: true,
};

const userLogged = createSlice({
  name: "userLogged",
  initialState: initial_state,
  reducers: {
    setLoginSuccess: (state, actions) => {
      const { payload } = actions;
      state = payload;
    },
  },
});

export const { setLoginSuccess } = userLogged.actions;
export default userLogged.reducer;
