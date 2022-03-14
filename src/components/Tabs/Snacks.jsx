import React from "react";
import ItemCard from "../Cards/ItemCard";

const Snacks = ({ snacks, setOpen, setClickId, setItem, loading }) => {

  return (
    <React.Fragment>
      {!loading && snacks.length < 1 && <p>There are currently no items in this category</p>}
      <div className="vendor_tab-grid">
        {snacks.map(item => (
          <React.Fragment key={item.id}>
            <ItemCard item={item} setOpen={setOpen} setClickId={setClickId} setItem={setItem}/>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
    );
};

export default Snacks;