import React from 'react';
import { Link } from 'react-router-dom';
import {MdPerson,} from 'react-icons/md';
import {BiPowerOff} from 'react-icons/bi';
import { useAuth } from '../../contexts/authContext';

const AdminCard = () => {

  const { logout } = useAuth();

  return (
    <div className="admin_card-container shadow">
      <div><MdPerson className='admin_password-icon'/><Link to="/password-reset" style={{color: 'rgb(33,31,31)'}}>Reset password</Link></div>
      <div onClick={() => logout()}><BiPowerOff className='admin_reset-icon'/><span>Logout</span></div>
    </div>
  );
};

export default AdminCard;
