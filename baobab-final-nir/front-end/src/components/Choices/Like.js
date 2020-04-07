import React from 'react';

const Like = ({ apartmentId, modifyChoices }) => (
  <button
    type="button"
    onClick={() => modifyChoices(apartmentId, 'ADD_TO_LIKED_APARTMENTS')}
  >
    <img src={ require("../../images/buttons/like.png")} />
  </button>
);

export default Like;
