import React, {useContext,useState} from 'react';
import classes from './MealForm.module.css';
import Input from '../../UI/Input';
import CartContext from '../../../store/cart-context';
const MealForm = (props) => {
  
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const inputChangeHandler = (event) => {
    event.preventDefault();
    setQuantity(event.target.value); 
  };

  const addItemHandler = (event) => {
    event.preventDefault();
    if (!isNaN(quantity) && quantity > 0) {
      cartCtx.addItem({ ...props.item, quantity: quantity });
    }
  };

 return (
   <form className={classes.form}  onChange={inputChangeHandler}>
   <Input label="Amount" input={{
    id: 'amount_' + props.id,
    type: 'number',
    min:'1', max:'5',
    step: '1',
    value: quantity.toString(), 
   
    
   }}  />
    <button onClick={addItemHandler} className={classes.addBtn}>+ Add</button>
   </form>
 )
}

export default MealForm;