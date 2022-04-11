import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
	const cartitems = (
		<ul className={classes["cart-items"]}>
			{[
				{
					id: "m1",
					name: "ChickenJoy",
					amount: 2,
					price: 22.99,
				},
			].map((d) => {
				return <li>{d.name}</li>;
			})}
		</ul>
	);

	return (
		<Modal onClick={props.onHideCart}>
			{cartitems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>45.98</span>
			</div>
			<div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button} onClick={props.onHideCart}>Order</button>
            </div>
		</Modal>
	);
};

export default Cart;
