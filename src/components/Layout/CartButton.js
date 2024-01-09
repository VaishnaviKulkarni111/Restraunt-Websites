import { useContext } from "react";

import CartContext from "../../store/cart-context";
import Carticon from "../Cart/Carticon";
import classes from './CartButton.module.css';


const CartButton =(props) =>{
    const cartCtx = useContext(CartContext);

    const itemsInCart = cartCtx.items.reduce((currentNo, item)=> {
        return currentNo + item.amount;
    }, 0); // 0 to avoid error

    return <button className={classes.button} onClick={props.onClickk}>
    <span className={classes.icon}>
    <Carticon/>
    </span>
    <span> Your Cart</span>
    <span className={classes.badge}>{itemsInCart}</span>
    </button>
};

export default CartButton;