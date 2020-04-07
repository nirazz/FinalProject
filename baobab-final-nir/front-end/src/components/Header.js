import React from 'react';

const Header = () => (
  <header>
    <div className="fl">
      <button type="button" onClick={() => alert("As soon as you have a match, you will get access to their contacts")}>
        <img src={ require("../images/buttons/messages.png")}/>
         {/* <img src={ require('./images/image1.jpg') } />  */}
      </button>
    </div>
  </header>
);

export default Header;