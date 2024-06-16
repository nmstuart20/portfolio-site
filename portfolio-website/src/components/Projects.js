// components/Resume.js
import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1 class="projects-header">Projects</h1>
        <main>
        <div class="projects">
            <div class="project">
                <h2>Wire Design Automation</h2>
                <p>This project started as a way to automate many of the time consuming and manual tasks involved in designing wire harnesses. 
                   I wrote applications in Java that automated tasks such as selecting wire harness components, seperating wires, and generating reports.
                </p>
            </div>
            <div class="project">
                <h2>Fusion Analysis Tool Suite</h2>
                <p>Contributed to a suite of tools to analyze Sensor Fusion data products. Added features related to data analsysis, data parsing, and automating analysis actions. </p>
            </div>
            <div class="project">
                <h2>Rust Newsletter</h2>
                <p>Designed and developed a production newsletter for my podcast using Rust. This project was selected to help with the podcast, but also to improve my skills in backend development, specifcally with Rust.</p>
            </div>
            <div class="project">
                <h2>Fantasy Golf WebApp </h2>
                <p>Developed a webapp in Rust that allows multiple users to draft golfers in the Masters tournament and keeps track of each users points.</p>
            </div>
        </div>
    </main>
      </div>
    );
  }
}

export default Projects;