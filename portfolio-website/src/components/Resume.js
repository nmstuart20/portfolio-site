// components/Resume.js
import React from 'react';
import Navigation from './Navigation';

class Resume extends React.Component {
  render() {
    return (
        <><Navigation />
        <div className="resume-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <iframe src="./resume_sw.pdf" width="100%" height="100%" alt="pdf"></iframe>
        </div></>
    );
  }
}

export default Resume;