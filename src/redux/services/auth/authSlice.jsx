import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  userInfo: null,
  authStatus: false,
  startTime: null,
  endTime: null,
  timeElapsed: null,
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
    setStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    setEndTime: (state, action) => {
      state.endTime = action.payload;
    },
    setTimeElapsed: (state, action) => {
      state.timeElapsed = action.payload;
    },
  },
});

export const {
  setUser,
  setAuthStatus,
  setStartTime,
  setEndTime,
  setTimeElapsed,
} = authSlice.actions;

export default authSlice.reducer;
