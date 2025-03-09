// components/Resume.js
import React from 'react';
import Navigation from './Navigation';

class Resume extends React.Component {
  render() {
    return (
        <><Navigation />
        <div className="resume-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <iframe src={`${process.env.PUBLIC_URL}/resume_sw.pdf`} width="100%" height="100%" title="Resume" />
        </div></>
    );
  }
}

export default Resume;