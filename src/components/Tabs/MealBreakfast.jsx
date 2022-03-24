import React from "react";
import MealCard from "../Cards/MealCard";

const MealBreakfast = ({ breakfast, setOpen, setClickId, setItem, loading }) => {

  return (
    <React.Fragment>
      {!loading && breakfast.length < 1 && <p>There are currently no items in this category</p>}
      <div className="meal_tab-grid">
      {breakfast.map(item => (
        <React.Fragment key={item.id}>
          <MealCard item={item} setOpen={setOpen} setClickId={setClickId} setItem={setItem}/>
        </React.Fragment>
      ))}
    </div>
    </React.Fragment>
    
    );
};

export default MealBreakfast;