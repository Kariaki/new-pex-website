import React from 'react';
import Button from '../Button';

const UnverifiedVendorCard = ({data, click, setClickId}) => {

  const onClick = async (id) => {
    await setClickId(id);
    click()
  }
  return (
    <div className="vendor-card shadow">
      <img src={data.data.profileUrl} alt={data.data.name} />
      <h4>{data.data.name}</h4>
      <Button text="Unverified" bgColor="rgb(214, 209, 209)" color="black"  onClick={() => onClick(data.data.id)}/>
    </div>
  );
};

export default UnverifiedVendorCard;
