import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
          <h2 className='nav_brand'>PEX</h2>
          <NavLink to="/admin/dashboard" className='nav-link' activeClassName="active" onClick={handleClick}><ion-icon name="grid-outline"></ion-icon> Dashboard</NavLink>
          <NavLink to="/admin/orders" className='nav-link' activeClassName="active" onClick={handleClick}><ion-icon name="clipboard-outline"></ion-icon> Orders</NavLink>
          <NavLink to="/admin/customers" className='nav-link' activeClassName="active" onClick={handleClick}><ion-icon name="file-tray-full-outline"></ion-icon> Customers</NavLink>
          <NavLink to="/admin/vendors" className='nav-link' activeClassName="active" onClick={handleClick}><ion-icon name="folder-outline"></ion-icon> Vendors</NavLink>
        </nav>

      </header>
  );
};

export default Header;

