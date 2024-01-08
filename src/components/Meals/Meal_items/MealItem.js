import classes from './MealItem.module.css';
import MealForm from './MealForm';


const MealIteam = (props) => {
   const price = `₹ ${props.price}.00`;
 
    return(
      <li className={classes.meal}>
        <div> 
        <h3>{props.name}  </h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price} </div>
        </div>
        <div>
        <MealForm/> 
        </div>
       
      </li>  
    )
}

export default MealIteam;