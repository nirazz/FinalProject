import React from 'react';
import LikedApartments from './LikedApartments';

const NoMoreApartments = ({ activeUserImage, likedApartments }) => (
  <div id="NoMoreApartments">
    <p>There are no new apartments around you.</p>

    <span className="pulse">
      <img src={`/images/apartments/${activeUserImage}`} alt=".." />
    </span>

    <div id="liked-apartments">
      <p>
        {likedApartments.length > 0
          ? "Apartments you liked...let's hope they will like your apartment too!"
          : ''}
      </p>

      {likedApartments.map(item => (
        <LikedApartments key={item.id} apartment={item} />
      ))}

    </div>
  </div>
);

export default NoMoreApartments;
