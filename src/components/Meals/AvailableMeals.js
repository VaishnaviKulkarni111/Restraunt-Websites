import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Paneer',
    description: 'Finest fish and veggies',
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
   const MealList = DUMMY_MEALS.map( meal => <li>{meal.name}</li>); 

    return (
     <section className={classes.meals}>
        <ul> {MealList} </ul>
     </section>   
    )
}

export default AvailableMeals;