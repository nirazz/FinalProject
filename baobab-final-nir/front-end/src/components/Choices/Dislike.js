import React from 'react';

const Dislike = ({ apartmentId, modifyChoices }) => (
  <button
    type="button"
    onClick={() => modifyChoices(apartmentId, 'ADD_TO_DISLIKED_APARTMENTS')}
  >
    <img src={ require("../../images/buttons/dislike.png")} />
  </button>
);

export default Dislike;