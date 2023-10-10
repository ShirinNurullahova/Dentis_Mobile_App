import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../types/types';

export type LoginUserAction = PayloadAction<IUser | null>;

const initialState: {user: IUser | null} = {
  user: null,
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
  },
});

export const {loginUser, logOutUser} = authSlice.actions;
export default authSlice.reducer;

// Usage example:
