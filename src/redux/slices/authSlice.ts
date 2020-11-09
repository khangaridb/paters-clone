import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../common/types';

type currentUser = {
  username: string;
  token: string;
};

type authState = {
  currentUser?: currentUser;
};

const initialState: authState = {};

export const login = createAsyncThunk('auth/login', async (params: { username: string; password: string }) => {
  console.log(params);
  // fetch api here
  return { username: 'dummy username', token: 'dummy token' };
});

export const restoreToken = createAsyncThunk('auth/restoreToken', async (params: { token?: string }) => {
  if (!params.token) {
    return null;
  }
  // fetch api here
  return { username: 'dummy username', token: 'dummy token' };
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedOut: (state) => ({
      ...state,
      currentUser: undefined,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
    });

    builder.addCase(restoreToken.fulfilled, (state, { payload }) => {
      state.currentUser = undefined;

      if (payload) {
        state.currentUser = payload;
      }
    });

    builder.addCase(restoreToken.rejected, (state) => {
      state.currentUser = undefined;
    });
  },
});

export const { loggedOut } = authSlice.actions;

export default authSlice.reducer;

export const getCurrentUser = (state: RootState) => state.auth.currentUser;
