import { RootState } from 'store';
import { createSelector } from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect';

export const TAX_RATE = 0.18;

export const selectCartProducts = (state: RootState) => state.checkout.products;

export const selectSubTotal = createSelector(
	selectCartProducts,
	(cartProducts) =>
		cartProducts.reduce((acc, item) => acc + item.price * item.count, 0)
);

export const selectTax = createSelector(
	selectSubTotal,
	(subTotal) => subTotal * TAX_RATE
);

export const selectTotal = createSelector(
	selectSubTotal,
	selectTax,
	(subTotal, selectTax) => subTotal + selectTax
);

export const selectCount = createSelector(selectCartProducts, (cartProducts) =>
	cartProducts.reduce((acc, item) => acc + item.count, 0)
);

export const mapCartState = createStructuredSelector({
	cartProducts: selectCartProducts,
	count: selectCount,
	total: selectTotal,
	subTotal: selectSubTotal,
	taxes: selectTax,
});
