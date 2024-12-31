import React from 'react';
import Navbar from './Navbar';
import PolaroidSection from './PolaroidSection';
import './App.css';

const polaroids = [
  { imageSrc: `${process.env.PUBLIC_URL}/images/dcs.jpg`, caption: 'Software Engineer' },
  { imageSrc: `${process.env.PUBLIC_URL}/images/dcs.jpg`, caption: 'Cloud Engineer' },
  { imageSrc: `${process.env.PUBLIC_URL}/images/dcs.jpg`, caption: 'Software Engineer' },
];

const App = () => {
  return (
    <div className="body">
      <Navbar />
      <section id="experience" className='section'>
        <PolaroidSection title="Experience" polaroids={polaroids} />
      </section>
    </div>
  );
};

export default App;
