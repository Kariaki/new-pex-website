import { Link } from 'react-router-dom';

const CountsCard = ({card}) => {
  return (
    <Link to={`${card.url}`} className="card_container">
      <div className='card_icon'>{card.icon}</div>
      <div className="card_details">
        <h4>{card.count}</h4>
        <p>{card.name}</p>
      </div>
    </Link>
  );
};

export default CountsCard;
