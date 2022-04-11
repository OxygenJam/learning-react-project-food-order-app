import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		// const updatedItems = state.items.concat(action.item); // returns a new array vs push

		const existingCartItemIndex = state.items.findIndex((d) => {
			return d.id === action.item.id;
		});

		const existingCartItem = state.items[existingCartItemIndex];
		let updatedItems;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	if (action.type === "REM_ITEM") {
		const existingCartItemIndex = state.items.findIndex((d) => {
			return d.id === action.id;
		});

		const existingItem = state.items[existingCartItemIndex];
		const updatedTotalAmount = state.totalAmount - existingItem.price;

		let updatedItems;
		if (existingItem.amount === 1) {
			updatedItems = state.items.filter((d) => {
				return d.id != action.id;
			});
		} else {
			const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = (item) => {
		dispatchCart({
			type: "ADD_ITEM",
			item: item,
		});
	};

	const removeItemFromCartHandler = (id) => {
		dispatchCart({
			type: "REM_ITEM",
			id: id,
		});
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
