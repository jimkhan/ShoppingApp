import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  allProducts: [],
  allCategory: [],
};

const productInfo = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    },
    setAllCategory: (state, action) => {
      state.isLoading = false;
      state.allCategory = action.payload;
    },
  },
});

export const {setAllProducts, setAllCategory} = productInfo.actions;

export default productInfo.reducer;
