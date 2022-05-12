import React from 'react';
import { db } from '../../firebase-config';
import { doc, deleteDoc } from "firebase/firestore";
import { MdDelete } from 'react-icons/md';

const DrawerItem = ({ item }) => {

  //Firebase function call to delete item from cart collection
  const handleDeleteItem = async (item) => {
    await deleteDoc(doc(db, "cart", item.id));
  }


  return (
    <div className='drawer_item'>
      <div className="drawer_item-description">
        <h4>{item?.storeItem?.name}</h4>
        <p>{item?.storeItem?.description}Lorem ipsum dolor sit amet consectetur</p>
        <span>{item?.quantity}</span>
        <span>&#8226;</span>
        <span>₦{`${item?.quantity}` * `${item?.price}`}</span>
      </div>
      <button onClick={() => handleDeleteItem(item)}><MdDelete size={15} color="white"/></button>
    </div>
  )
}

export default DrawerItem