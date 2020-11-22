import { createSlice } from '@reduxjs/toolkit';

const INITIAL_PROFILE = {
  name: 'Guest',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: INITIAL_PROFILE,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload
    }
  }
})

export const { changeName } = profileSlice.actions;

export default profileSlice.reducer;
