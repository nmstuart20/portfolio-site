import './App.css';
// App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Gallery from './components/Gallery'; 
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/portfolio-site" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <footer>
            <p>© 2024 Nicholas Stuart</p>
            <Link to={`/contact`}> Contact Me</Link>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
