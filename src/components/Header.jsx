import { useState } from 'react';
import { Link } from 'react-router-dom';
import {CgMenuLeft, CgClose} from 'react-icons/cg';

const Header = () => {

   const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  return (
      <header className='header'>
        <div className="mobile_menu-icon" onClick={handleClick}>
          { clicked ? (<CgClose size={22} className="menu-icon"/>) : (<CgMenuLeft size={22} className="menu-icon"/>) }
        </div>
        
        <nav className={clicked ? "nav_links active" : "nav_links"}>
          <CgClose size={22} className="menu-icon" onClick={()=>{setClicked(prev => !prev)}}/>
          <h3 className='nav_brand'>PAX</h3>
          <Link to="/dashboard" className='nav-link' onClick={handleClick}><ion-icon name="grid-outline"></ion-icon> Dashboard</Link>
          <Link to="/orders" className='nav-link' onClick={handleClick}><ion-icon name="clipboard-outline"></ion-icon> Orders</Link>
          <Link to="/customers" className='nav-link' onClick={handleClick}><ion-icon name="file-tray-full-outline"></ion-icon> Customers</Link>
          <Link to="/businesses" className='nav-link' onClick={handleClick}><ion-icon name="folder-outline"></ion-icon> Businesses</Link>
        </nav>

      </header>
  );
};

export default Header;

