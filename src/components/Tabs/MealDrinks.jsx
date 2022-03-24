import React from "react";
import MealCard from "../Cards/MealCard";

const MealDrinks = ({ drinks, setOpen, setClickId, setItem, loading }) => {

  return (
    <React.Fragment>
      {!loading && drinks.length < 1 && <p>There are currently no items in this category</p>}
      <div className="meal_tab-grid">
      {drinks.map(item => (
        <React.Fragment key={item.id}>
          <MealCard item={item} setOpen={setOpen} setClickId={setClickId} setItem={setItem}/>
        </React.Fragment>
      ))}
    </div>
    </React.Fragment>
    
    );
};

export default MealDrinks;