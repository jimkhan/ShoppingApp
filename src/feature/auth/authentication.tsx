import {createSlice} from '@reduxjs/toolkit';

interface Props {
  isLoading: boolean;
  userToken: string;
}

const initialState = {
  isLoading: false,
  userToken: '',
} as Props;

const authState = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.userToken = action.payload;
      state.isLoading = false;
    },
    signOut: () => initialState,
  },
});

export const {signIn, signOut} = authState.actions;

export default authState.reducer;
