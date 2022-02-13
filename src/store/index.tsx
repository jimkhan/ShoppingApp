import {configureStore} from '@reduxjs/toolkit';

import authentication from '../feature/auth/authentication';
import productsInfo from '../feature/products';
import cartInfo from '../feature/shoppingCart';

export const store = configureStore({
  reducer: {
    auth: authentication,
    orders: productsInfo,
    cart: cartInfo,
  },
});
