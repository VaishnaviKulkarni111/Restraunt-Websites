
import classes from './Summary.module.css';

const Summary =() => {
    return ( <section className={classes.summary}>
    <h2 className={classes.summary}>Delicious Food, Delivered To You!</h2>    
    <p> Choose your favourite meal from our broad selection of available meals 
        and enjoy a delicious lunch/ dinner at home.
    </p>
    <p> All our meals are coocked with high quality ingredients, just in time and 
        of cource by experienced chefs!
    </p>
    </section>)
}

export default Summary;