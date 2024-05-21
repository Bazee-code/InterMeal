import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  userInfo: null,
  authStatus: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    setAuthStatus: (state, action) => {
      state.authStatus = action.payload;
    },
  },
});

export const {setUser, setAuthStatus} = authSlice.actions;

export default authSlice.reducer;
