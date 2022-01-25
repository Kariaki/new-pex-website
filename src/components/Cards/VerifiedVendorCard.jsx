import React from 'react';

const VerifiedVendorCard = ({data, click, setClickId}) => {

  const onClick = (id) => {
    setClickId(id)
    click()
  }
  return (
    <div className="vendor-card shadow" onClick={() => onClick(data.data.id)} style={{cursor: 'pointer'}}>
      <img src={data.data.profileUrl} alt={data.data.name} />
      <h4>{data.data.name}</h4>
      <div className="verified_vendor-card-offers">
          <div>
            <span>Menu</span>
            <span>7</span>
          </div>
          <div>
            <span>Meals</span>
            <span>35</span>
          </div>
          <div>
            <span>Orders</span>
            <span>305</span>
          </div>
        </div>
    </div>
  );
};

export default VerifiedVendorCard;
