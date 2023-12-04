import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../types/types';
import { useSelector } from 'react-redux';

export type LoginUserAction = PayloadAction<IUser | null>;

const initialState: {user: IUser | null, loginBody: any} = {
  user: null,
  loginBody: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser(state, {payload}: LoginUserAction) {
      state.user = payload;
    },
    logOutUser(state) {
      state.user = null;
    },
    setLoginBody(state, action) {
      state.loginBody = action.payload;
    },
  },
});




export const {loginUser, logOutUser, setLoginBody} = authSlice.actions;
export default authSlice.reducer;

// Usage example:
