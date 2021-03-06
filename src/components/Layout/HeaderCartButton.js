import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	const ctx = useContext(CartContext);
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

	const numberOfCartItems = ctx.items.reduce((p, c) => {
		return (p += c.amount);
	}, 0);

	const btnClasses = `${classes.button} ${
		btnIsHighlighted ? classes.bump : ""
	}`;

	const { items } = ctx;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnIsHighlighted(true);
        
		const timer = setTimeout(() => {
			setBtnIsHighlighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
