import React, {useState} from 'react';
import logo from '../assets/logo.png';
import AdminCard from './Cards/AdminCard';

const PageHeader = ({title, subTitle}) => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(prev => !prev)
  }

  return (
    <React.Fragment>
      {clicked ? <AdminCard /> : ''}
      <div className="page_header" >
      <div className="page_title">
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
      <div className="profile">
        <h2>Admin</h2>
        <img src={logo} alt="restaurant-logo"  className='logo' onClick={handleClick} />
      </div>
    </div>
    </React.Fragment>
  );
};

export default PageHeader;
