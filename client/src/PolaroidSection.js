import React from 'react';
import './PolaroidSection.css';
import Polaroid from './Polaroid';

const PolaroidSection = ({ title, polaroids }) => {
  return (
    <section className="polaroid-section">
      <h2>{title}</h2>
      <div className="polaroid-grid">
        {polaroids.map((polaroid, index) => (
          <Polaroid key={index} imageSrc={polaroid.imageSrc} caption={polaroid.caption} />
        ))}
      </div>
    </section>
  );
};

export default PolaroidSection;
