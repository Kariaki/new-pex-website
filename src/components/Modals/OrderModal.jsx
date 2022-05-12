import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Button from '../Button';
import { closeIconBlack } from '../utils/closeIcon';
import moment from 'moment';

import { db } from '../../firebase-config';
import { addDoc, collection, updateDoc } from "firebase/firestore";

import { useAuth } from '../../contexts/authContext';

import '../../styles/utils/responsiveModal.scss';


const OrderModal = ({open, setOpen, item}) => {
  const [quantity, setQuantity] = useState(1);
  const { user } = useAuth();
  const navigate = useNavigate();
  
  //Get current date and time
  const dateString = moment(new Date()).format('YYYY-MM-DD');
  const timeString = moment(new Date().getTime()).format('LT');

  //Function to add item to cart (accepts the item as a parameter)
  async function addToCart(item){
    const cartItem = {
        date: dateString,
        deliveryAddress: '',
        deliveryContact: '',
        id: '',
        orderStates: 'PENDING',
        ownerId: user.uid,
        price: item.price,
        quantity: quantity,
        storeItem: item,
        time: timeString,
        vendorId: item.vendorId
      }
    
    //Create a reference for the item in the cart collection
    const docRef = await addDoc(collection(db, "cart"), cartItem);

    //Update the id field with firebase generated id
    await updateDoc(docRef, {
        id: docRef.id
      });
  }

  //Function to push item to cart, close modal and reset quantity pack to default
  const handleAddToCart =  (item) => {
    if(user){
      addToCart(item)
      setOpen(false)
      setQuantity(1)
    } else {
      navigate('/users/login')
    }  
  }

  const handleClose = () => {  
    setQuantity(1)
    setOpen(false)
  }
  

  return (
    <React.Fragment>
      <Modal open={open} onClose={handleClose} center closeIcon={closeIconBlack} classNames={{ modal: 'customModal'}}>
        <div className='order_modal'>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <h4>{item.vendorName}</h4>
          <img src={item.imageUrl} alt={item.name} />
        <div className="footer">
          <div className="footer_btn">
            <button onClick={() => quantity < 2 ? setQuantity(1) : setQuantity(prev => prev - 1)}>-</button>
            <h3>{quantity}</h3>
            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
          </div>
          
          <Button text="Add to cart" bgColor="rgb(224,209,92)" color="rgb(33,31,31)" onClick={()=>handleAddToCart(item)}/>
          
        </div> 
        </div>  
      </Modal>
    </React.Fragment>
  );
};

export default OrderModal;
