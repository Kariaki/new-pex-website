import logo from '../assets/logo.png';

const PageHeader = ({title, subTitle}) => {
  return (
    <div className="page_header">
      <div className="page_title">
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
      <div className="profile">
        <h2>Admin</h2>
        <img src={logo} alt="restaurant-logo"  className='logo'/>
      </div>
    </div>
  );
};

export default PageHeader;
