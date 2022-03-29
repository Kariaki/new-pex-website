import React from 'react';

const MealCard = ({item, setOpen, setClickId, setItem}) => {

  const handleClick = (item) => {
    setOpen(true)
    setClickId(item.id)
    setItem(item)
  }

  return (
    <div className="meal_card shadow" onClick={() => handleClick(item)}>
      <img src={item.imageUrl} alt={item.name} style={{width: '100%', height: '70%'}}/>
      <div className="meal_card-details">
        <h3>{item.name}</h3>
        <div className="meal_card-details-subdetails">
          <span>₦{item.price}</span>
          <span className='dot'>&#8226;</span>
          <span>{item.vendorName}</span>
        </div>   
      </div>
    </div>
  )
}

export default MealCard;