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
          <p>Welcome to my portfolio website. Here, you'll find information about my projects, skills, and professional journey.</p>
        </section>
        <section id="biography">
          <h2>Biography</h2>
          <p>I'm a Senior Engineer within the Aerospace and Defense industry with multiple years of experience.
            I completed my undergraduate degree in Electrical Engineering at the University of Texas A&M and upon graduating joined Lockheed Martin as a project engineer.
            Shortly after starting at Lockheed Martin I began my Masters in Business Administration at the University of Texas at Arlington (I like to learn new things so when a company is willing to pay for degrees, this passion for learning turns into graduate studies).
            After spending time as a project engineer in the Mission Systems world, I switched over to Electrical Wiring/Power on a new program within the Skunk Works. During this time I started to write more and more software automating many of the
            manual processes related to wiring design and development. I realized my passion for software and decided to make the switch to a full time software engineer role.
            This is when I joined the Sensor Fusion team and have worked within that role for the last 3 years.
            In my personal time I like to golf, work out, and learn new things (with this currently being enrolled in the Boston Masters of Software Development).
            I've also recently started a podcast about trying to podium in a Spartan Race (it's called the <a href="https://www.subparathletes.com">Subpar Athletes podcast</a>).</p>
        </section>
        <section id="about-the-project">
          <h2>About the Project</h2>
          <p>This portfolio website is a personal project to showcase my work and skills. It is built with React, showcasing my ability to create interactive and modern web applications.</p>
        </section>
      </div></>
    );
}

export default Home;