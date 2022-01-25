import React from 'react';
import Avatar from 'react-avatar';

const CustomerCard = ({ customer: {data} }) => {
  return (
    <div className='customer_card shadow'>
      <div>
        {data.profileUrl ? <img src={data.profileUrl} alt={data.name} style={{width: '50px', height: '50px', objectFit: 'contain', borderRadius: '50%'}}/> :
        <Avatar color="rgb(224,209,92)" name={data.name? `${data.name.substring(0, 1)} ${data.name.substring(1, 2)}` : 'unknown'} className='avatar' size="50"/>}
        <h4>{data.name}</h4>
      </div>
      <div>
        <span>Number</span>
        <p>{data.contactDetails.phone}</p>
      </div>
      <div>
        <span>Email</span>
        <p>{data.contactDetails.email ? data.contactDetails.email : 'johndoe@gmail.com'}</p>
      </div>
      <div>
        <span>Address</span>
        <p>{data.deliveryAddress}</p>
      </div>
    </div>
  );
};

export default CustomerCard;
