import React from 'react';
import './Polaroid.css';

const Polaroid = ({ imageSrc, caption }) => {
  return (
    <div className="polaroid">
      <img src={imageSrc} alt={caption} className="polaroid-image" />
      <div className="polaroid-caption">{caption}</div>
    </div>
  );
};

export default Polaroid;