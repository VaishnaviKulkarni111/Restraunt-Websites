import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealForm from './Meal_items/MealForm';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Shahi Paneer',
    description: 'Creamy Gravy with spices',
    price: 300,
  },
  {
    id: 'm2',
    name: 'Dal-Makhani',
    description: 'with punjabi tadkaa!',
    price: 220,
  },
  {
    id: 'm3',
    name: 'Chole-Bature',
    description: 'fluffy Bhature with tangy & spicy Chole',
    price: 250,
  },
  {
    id: 'm4',
    name: 'Gulab Jamun',
    description: 'Rich & Royal taste! ',
    price: 300,
  },
];

const AvailableMeals = () => {
   const MealList = DUMMY_MEALS.map( meal => 
    <li className={classes.mealList} key={meal.id}>
    <div className={classes.list}>
      <span className={classes.mealName}>{meal.name}</span>
      <span className={classes.mealDesc}>{meal.description}</span>
      <span className={classes.mealPrice}> {meal.price} Rs</span>
    </div>
    
      <MealForm id={meal.id} item={meal} ></MealForm>
    
  </li> )

    return (
     <section className={classes.meals}>
      <Card >
        <ul> {MealList} </ul>
        </Card>
     </section>   
    )
}

export default AvailableMeals;