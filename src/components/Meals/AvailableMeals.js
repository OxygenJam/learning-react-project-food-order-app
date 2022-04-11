import DUMMY_MEALS from "./DUMMY_MEALS_DATA"; // Dummy data
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
	const mealsList = DUMMY_MEALS.map((d) => {
		return (
			<MealItem key={d.id}
				name={d.name}
				description={d.description}
				price={d.price}
				id={d.id}
			/>
		);
	});

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
