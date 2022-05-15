import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdShoppingCart, MdPerson } from 'react-icons/md';
import { IoCloseCircle } from 'react-icons/io5';
import { useAuth } from '../contexts/authContext';
import { db } from '../firebase-config';
import { collection, query, onSnapshot } from "firebase/firestore";
import DrawerItem from './Cards/DrawerItem';

const UsersHeader = () => {

  const [cart, setCart] = useState([]);
  const { user, logout } = useAuth();
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const data = query(
      collection(db, "cart")
      );
      onSnapshot(data, (querySnapshot) => {
        setCart(querySnapshot.docs.map((doc) => doc.data()));
      });  
  }, []);


  const handleCart = () => {
    setClicked(prev => !prev)
  }

  const handleClick = () => {
    navigate('/users/checkout')
    setClicked(prev => !prev)
  }

  const price = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const total = price + 200;

  return (
    <header className="users_header">
      {clicked && 
        <div className="cart_drawer">
          <div onClick={() => setClicked(prev => !prev)} className="cart_drawer-close">
            <IoCloseCircle size={24}/>
            <h4>Your Cart</h4>
          </div>
          {user
            ? cart.filter(item => item.ownerId === user.uid).length && cart.map((item, i) => (
              <React.Fragment key={i} >
                <div className='cart_drawer-horizontal-line'></div>
                <DrawerItem item={item}/>
              </React.Fragment>
            )) 
            : <p>No items in your cart yet</p>}
          {user
            ? (<div className='cart_drawer-checkout'>
                <div>
                  <p>Total</p>
                  <p>₦{total.toLocaleString()}</p>
                </div>
                <button onClick={handleClick}>Checkout</button>
              </div>) 
            : ''}   
        </div>
      }
      <nav>
        <div className="nav_links">
          <span>
            <Link to="/">PEX</Link>
          </span>
        <ul>
        <li>
          <Link to="/users/meals">
          meals
          </Link>
        </li>

        <li>
          <Link to="/users/vendors">
          vendors
          </Link>
        </li>
      </ul>
        </div>
        

      <div className="action_btns">
        {<Link to="/users/login" className="profile icon">
          {user ? <MdPerson onClick={() => logout()}/> : <p>Login</p>}
        </Link>}
        
        <div className='cart icon' onClick={handleCart}>
          <MdShoppingCart size={18}/>
          <span>{user ? (cart.filter(item => item.ownerId === user.uid).length) : '0'}</span>
        </div>
      </div>
      </nav>
    </header>
  )
}

export default UsersHeader