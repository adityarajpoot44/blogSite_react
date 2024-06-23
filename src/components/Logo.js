import React from 'react';

const Logo = ({ 
    width
 }) => {
  return (
    <div>
      <img
        className={`${width} `}
        src={require('../assset/logoimg.png')}
        alt="Logo"
      />
    </div>
  );
};

export default Logo;