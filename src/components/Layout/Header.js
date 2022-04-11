import React from "react";
import jabee from "../../assets/jabee.jpg"

import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={classes.header}>
                <h1>Jollibee</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
			<div className={classes['main-image']}>
                <img src={jabee} alt="Jollihotdog masarap huehuehueh"/>
            </div>
		</React.Fragment>
	);
};

export default Header;
