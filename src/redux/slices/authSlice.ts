import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type currentUser = {
  username: string;
  token: string;
};

type authState = {
  currentUser?: currentUser;
};

const initialState = {
  currentUser: null,
};

export const login = createAsyncThunk('auth/login', async () => {
  // fetch api here
  return { username: 'dummy username', token: 'dummy token' };
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedIn: (state, action) => ({
      ...state,
      currentUser: action.payload,
    }),

    loggedOut: (state) => ({
      ...state,
      currentUser: null,
    }),

    restoredToken: (state, action) => ({
      ...state,
      currentUser: action.payload,
    }),
  },
});

export const { loggedIn, loggedOut, restoredToken } = authSlice.actions;

export const getCurrentUser = (state: authState) => state.currentUser;

export default authSlice.reducer;
