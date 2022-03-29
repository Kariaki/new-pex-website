import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logogo.jpg';

const VendorCard = ({vendor}) => {

  return (
    <Link to={`/users/vendor/${vendor.id}`} className='vendor_card-container'>
      <img src={vendor.url ? vendor.url : logo} alt={vendor.name}/>
      <span>{vendor.name}</span>
    </Link>
  );
};

export default VendorCard;
