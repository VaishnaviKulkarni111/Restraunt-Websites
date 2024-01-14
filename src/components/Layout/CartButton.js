import { useContext } from "react";

import CartContext from "../../store/cart-context";
import Carticon from "../Cart/Carticon";
import classes from './CartButton.module.css';


const CartButton =(props) =>{
    const cartCtx=useContext(CartContext);
    let quantity=0;
    cartCtx.items.forEach(item=>{
        quantity=quantity+ Number(item.quantity)

    });

    quantity = isNaN(quantity) ? 0 : quantity;
    

    return ( <button className={classes.button} onClick={props.onClickk}>
    <span className={classes.icon}>
    <Carticon/>
    </span>
    <span> Your Cart</span>
    <span className={classes.badge}>{quantity}</span>
    </button> )
};

export default CartButton;