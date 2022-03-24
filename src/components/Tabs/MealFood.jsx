import React from "react";
import MealCard from "../Cards/MealCard";

const MealFood = ({ food, setOpen, setClickId, setItem, loading }) => {

  return (
    <React.Fragment>
      {!loading && food.length < 1 && <p>There are currently no items in this category</p>}
      <div className="meal_tab-grid">
      {food.map(item => (
        <React.Fragment key={item.id}>
          <MealCard item={item} setOpen={setOpen} setClickId={setClickId} setItem={setItem}/>
        </React.Fragment>
      ))}
    </div>
    </React.Fragment>
    
    );
};

export default MealFood;