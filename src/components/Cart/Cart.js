import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
	const ctx = useContext(CartContext);

	const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
	const hasItems = ctx.items.length > 0;
    const cartItemRemoveHandler = (id) =>{
        ctx.removeItem(id);
    };

    const cartItemAddHandler = (item) =>{
        ctx.addItem({
            ...item,
            amount:1
        })
    }

	const cartitems = (
		<ul className={classes["cart-items"]}>
			{ctx.items.map((d) => {
				return (
					<CartItem
						key={d.id}
						name={d.name}
						amount={d.amount}
						price={d.price}
                        onRemove={cartItemRemoveHandler.bind(null,d.id)}
                        onAdd={cartItemAddHandler.bind(null, d)}
					/>
				);
			})}
		</ul>
	);

	return (
		<Modal onClick={props.onHideCart}>
			{cartitems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.onHideCart}>
					Close
				</button>
				{hasItems && (
					<button className={classes.button} onClick={props.onHideCart}>
						Order
					</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
