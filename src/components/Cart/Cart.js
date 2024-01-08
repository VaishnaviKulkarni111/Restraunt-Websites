import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const CartItems = <ul className={classes.cartitems}>{
    [{  id: 'm4', name: 'Gulab Jamun',
   description: 'Rich & Royal taste! ', price: 300,}].map(item => (<li>{item.name}</li>))
   }</ul> 

    return (
    <Modal onClose={props.onClose}>
     {CartItems}
     <div  className={classes.total}>
        <span>Total Amount</span>
        <span>345.00</span>
     </div>
    <div className={classes.btns}>
        <button className={classes.cancel} onClick={props.onClose}> Close </button>
        <button className={classes.order}> Order</button>
    </div>
    </Modal>
    )
}

export default Cart;