import { createSlice } from '@reduxjs/toolkit';
import { IAuthReducer } from '../../../Interfaces';

const initiaState: IAuthReducer = {
  accessToken: "",
  refreshToken: "",
  user: null,
  fromRegister: false,
  isCreatedTrack: false,
  isdeletedAccount: false,
};

const AuthReducer = createSlice({
  name: 'auth',
  initialState: initiaState,
  reducers: {
    setToken: (state: IAuthReducer, action) => {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
      state.user = action.payload.user
    },
    resetToken: (state: IAuthReducer) => {
      state.accessToken = ""
      state.refreshToken = ""
      state.user = null
    },
    refreshTokens: (state: IAuthReducer, action) => {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    }
  }
});

export const { setToken, resetToken, refreshTokens } = AuthReducer.actions;

export default AuthReducer.reducer;
