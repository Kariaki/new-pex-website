
const CountsCard = ({card}) => {
  return (
    <div className="card_container">
      <div className='card_icon'>{card.icon}</div>
      <div className="card_details">
        <h4>{card.count}</h4>
        <p>{card.name}</p>
      </div>
    </div>
  );
};

export default CountsCard;
