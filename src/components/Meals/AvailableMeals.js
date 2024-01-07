import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealIteam from './Meal_items/MealItem';

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
   <MealIteam 
   key={meal.id}
   name={meal.name}
   description={meal.description}
   price={meal.price}
   />); 

    return (
     <section className={classes.meals}>
      <Card>
        <ul> {MealList} </ul>
        </Card>
     </section>   
    )
}

export default AvailableMeals;