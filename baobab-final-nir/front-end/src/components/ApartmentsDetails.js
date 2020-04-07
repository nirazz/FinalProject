import React from 'react';
import Choices from './Choices';

const ApartmentDetails = ({ apartment, modifyChoices }) => {
  const { street, squareFoot, numberOfRooms, rentFee, image } = apartment;

  return (
    <>
      <div className="apartment">
        <div className="apartment-photo">
          <img src={`/images/apartments/${image}`} alt={street} />
        </div>

        <div className="apartment-squareFoot">
          <p className="apartment-street-numberOfRooms">
            {street}<span>{rentFee}</span>
          </p>
          <p className="apartment-info">{squareFoot}, {numberOfRooms}</p>
        </div>
      </div>

      <Choices
        apartment={apartment}
        modifyChoices={modifyChoices}
      />
    </>
  );
};

export default ApartmentDetails;
