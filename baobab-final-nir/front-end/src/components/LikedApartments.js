import React from 'react';

const LikedApartments = ({ apartment }) => (
  <div className="liked-apartments">
    <div className="liked-apartment-image">
      <img
        src={`/images/apartments/${apartment.image}`}
        alt={`You liked ${apartment.image}`}
      />
    </div>
  </div>
);

export default LikedApartments;