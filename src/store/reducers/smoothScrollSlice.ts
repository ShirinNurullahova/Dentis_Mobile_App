import {createSlice} from '@reduxjs/toolkit';

interface selectTableState {
  scrollY: number | null;
}

const initialState: selectTableState = {
  scrollY: null,
};

const smoothScrollSlice = createSlice({
  name: 'selectTable',
  initialState,
  reducers: {
    changeScroll(state, {payload}) {
      state.scrollY = payload as number;
    },
  },
});

export const {changeScroll} = smoothScrollSlice.actions;
export default smoothScrollSlice.reducer;
