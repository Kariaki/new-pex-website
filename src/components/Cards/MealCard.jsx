import logogo from '../../assets/logogo.jpg'

const MealCard = ({meal}) => {
  return (
    <div className="mealcard_container">
      <img src={logogo} alt="card" />
      <div>
        <h5>{meal.name}</h5>
        <p>{meal.ingredients}</p>
        <h6>{meal.location}</h6>
      </div>
    </div>
  );
};

export default MealCard;
