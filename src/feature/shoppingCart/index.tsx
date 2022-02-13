import {createSlice} from '@reduxjs/toolkit';

interface ProductsProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {rate: number; count: number};
  quantity: number;
}

interface Props {
  productList: ProductsProps[];
  totalItem: number;
  totalPrice: number;
}

const initialState = {
  productList: [],
  totalItem: 0,
  totalPrice: 0,
} as Props;

const cartInfo = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log('Call from store', action.payload);
      console.log('Call from store state', state.productList);
      const currentItem = action.payload;

      // const qnt = {quantity: 1};
      const itemIndex = state.productList.findIndex(
        item => item.id === currentItem.id,
      );
      console.log('IndexFound', itemIndex);

      if (itemIndex >= 0) {
        state.productList[itemIndex].quantity++;
      } else {
        state.productList.push({...currentItem, quantity: 1});
      }
      state.totalItem += 1;
      state.totalPrice += currentItem.price;
    },
    dicreaseFromCart: (state, action) => {
      const itemIndex = state.productList.findIndex(
        item => item.id === action.payload.id,
      );
      if (itemIndex >= 0 && state.productList[itemIndex].quantity > 1) {
        state.productList[itemIndex].quantity--;
        state.totalItem--;
        state.totalPrice -= state.productList[itemIndex].price;
      }
    },
    removeFromCart: (state, action) => {
      const currentItem = action.payload;
      const newProductList = state.productList.filter(
        item => item.id !== currentItem.id,
      );
      state.totalItem -= currentItem.quantity;
      state.totalPrice -= currentItem.quantity * currentItem.price;
      state.productList = newProductList;
    },
    clearState: () => initialState,
  },
});

export const {addToCart, removeFromCart, dicreaseFromCart, clearState} =
  cartInfo.actions;

export default cartInfo.reducer;
