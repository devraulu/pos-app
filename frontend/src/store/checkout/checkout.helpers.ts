export const existingCartItem = (prevCartItems, nextCartItem) =>
	prevCartItems.find((cartItem) => cartItem.id === nextCartItem.id);

export const handleAddToCart = (prevCartItems, nextCartItem) => {
	const quantityIncrement = 1;
	const cartItemExists = existingCartItem(prevCartItems, nextCartItem);
	if (cartItemExists) {
		return prevCartItems.map((cartItem) =>
			cartItem.id === nextCartItem.id
				? {
						...cartItem,
						quantity: cartItem.quantity + quantityIncrement,
				  }
				: cartItem
		);
	}
	return [
		...prevCartItems,
		{
			...nextCartItem,
			quantity: quantityIncrement,
		},
	];
};
