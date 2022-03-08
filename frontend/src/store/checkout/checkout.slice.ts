import { Client, Product } from 'models';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from 'store';
import { handleAddToCart } from './checkout.helpers';

type ProductState = { count: number } & Product;

interface CheckoutState {
	products: ProductState[];
}
const initialState: CheckoutState = {
	products: [],
};
export const checkoutSlice = createSlice({
	name: 'checkout',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ProductState>) => {
			const index = state.products.findIndex(
				(item) => item.objectID === action.payload.objectID
			);
			if (index !== -1) state.products[index].count += 1;
			else state.products.push({ ...action.payload, count: 1 });
		},
	},
});

export const { addToCart } = checkoutSlice.actions;

// export const selectClient = (state: RootState) => state?.checkout?.clientID;

export default checkoutSlice.reducer;
