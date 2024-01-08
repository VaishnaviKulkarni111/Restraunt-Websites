import Carticon from "../Cart/Carticon";
import classes from './CartButton.module.css';


const CartButton =(props) =>{
    return <button className={classes.button} onClick={props.onClickk}>
    <span className={classes.icon}>
    <Carticon/>
    </span>
    <span> Your Cart</span>
    <span className={classes.badge}>3</span>
    </button>
};

export default CartButton;