// components/Resume.js
import React from 'react';
import Navigation from './Navigation';

function Projects() {
    return (
        <><Navigation /><div className="header-container">
            <header className="page-header">Projects
                <div style={{ fontSize: 'small' }}>A mix of recent personal and work projects.</div>
            </header>
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
                        <h2>Custom Fusion Tracker</h2>
                        <p> Developed a tracker fully in Rust that uses various signal processing techniques to track the location of a target in 3D space.</p>
                    </div>
                    <div class="project">
                        <h2><a href="https://github.com/nmstuart20/zero2prod" target="_blank" rel="noopener noreferrer">Rust Newsletter</a></h2>
                        <p>Designed and developed a production newsletter for my podcast using Rust. This project was selected to help with the podcast, but also to improve my skills in backend development, specifcally with Rust.</p>
                    </div>
                </div>
            </main>
        </div></>
    );
}

export default Projects;