// components/Home.js
import React from 'react';
import Navigation from './Navigation';

function Home() {
    return (
      <><Navigation /><div className="header-container">
        <header className="page-header">Nicholas Stuart
          <div style={{ fontSize: 'small' }}>Software Engineer</div>
        </header>
        <section id="welcome">
          <h2>Welcome</h2>
          <p>Welcome to my portfolio! Here you'll discover my projects, technical expertise, and professional journey in software engineering.</p>
        </section>
        <section id="biography">
          <h2>Biography</h2>
          <p>I'm a Senior Engineer in the Aerospace and Defense industry with extensive experience in software development and systems engineering. 
            After completing my B.S. in Electrical Engineering from Texas A&M University, I joined Lockheed Martin as a project engineer. Driven by my passion for learning, 
            I pursued an MBA at the University of Texas at Arlington while working full-time.
            
            My career evolved from Mission Systems to leading electrical wiring and power systems at Skunk Works. During this time, I discovered my true calling in software development 
            by creating automation solutions for complex wiring design processes. This led me to transition into a full-time software engineering role with the Sensor Fusion team, 
            where I've been driving innovation for the past 3 years.
            
            Currently, I'm expanding my expertise through Boston University's Master's in Software Development program. Outside of work, I'm an avid golfer, fitness enthusiast, 
            and co-host of the <a href="https://www.subparathletes.com">Subpar Athletes podcast</a>, where I document my journey to achieve a podium finish in a Spartan Race.</p>
        </section>
        <section id="about-the-project">
          <h2>About the Project</h2>
          <p>This portfolio is crafted using React, demonstrating my proficiency in modern web development. It serves as a dynamic showcase of my technical capabilities and professional accomplishments.</p>
        </section>
      </div></>
    );
}

export default Home;