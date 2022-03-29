import React from 'react';
import { db } from '../../firebase-config';
import { doc, deleteDoc } from "firebase/firestore";
import { MdDelete } from 'react-icons/md';

const CartItem = ({ item }) => {

  //Firebase function call to delete item from cart collection
  const handleDeleteItem = async (item) => {
    await deleteDoc(doc(db, "cart", item.id));
  }

  return (
    <div className='cart_item'>
      <img src={item.storeItem.imageUrl} alt={item.storeItem.name} className="shadow" />
      <div className="cart_item-description">
        <h4>{item.storeItem.name}</h4>
        <p>{item.storeItem.description}Lorem ipsum dolor sit amet consectetur</p>
      </div>
      <div className="cart_item-price">
        <h3>{item.quantity}</h3>
        <p>₦{`${item.quantity}` * `${item.price}`}</p>
      </div>
      <button onClick={() => handleDeleteItem(item)}><MdDelete size={15} color="white"/></button>
    </div>
  )
}

export default CartItem