import React from 'react';
import Dislike from './Choices/Dislike';
import Like from './Choices/Like';

const Choices = ({ apartment, modifyChoices }) => (
  <div id="choices">
    <Dislike
      apartmentId={apartment.id}
      modifyChoices={modifyChoices}
    />
    <Like
      apartmentId={apartment.id}
      modifyChoices={modifyChoices}
    />  
  </div>
);

export default Choices;
