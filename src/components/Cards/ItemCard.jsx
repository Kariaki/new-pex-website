import React from 'react';

const ItemCard = ({item, setOpen, setClickId, setItem}) => {

  const handleClick = (item) => {
    setOpen(true)
    setClickId(item.id)
    setItem(item)
  }

  return (
    <div className="item_card shadow" onClick={() => handleClick(item)}>
      <img src={item.imageUrl} alt={item.name} style={{width: '45%', height: '100%'}}/>
      <div className="item_card-details">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <h3>₦{item.price}</h3>
      </div>
    </div>
  )
}

export default ItemCard;