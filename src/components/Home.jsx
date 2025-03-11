import React from 'react';
import './Home.css';
import { Linkedin, Github, Twitter } from 'lucide-react'; // Import Lucide icons

function Home() {
  return (
    <section className="home">
      <div className="home-text">
        <h1 className="home-title">Hello, I'm Zachary Witte</h1>
        <p className="home-description">
          A Result-Oriented Software Engineer building and managing Websites and Mobile Applications that lead to the success of the overall product.
        </p>
      </div>

      {/* Right Section - Adjusted Photo Layout */}
      <div className="home-photo">
        <img src="/me&monkey.jpg" alt="Zachary Witte with Monkey" className="profile-image small-image"/>
      </div>
    </section>
  );
}

export default Home;
