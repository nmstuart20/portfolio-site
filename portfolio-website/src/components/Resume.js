// components/Resume.js
import React from 'react';

class Resume extends React.Component {
  render() {
    return (
      <div className="resume-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <embed src="/resume_sw.pdf" width="100%" height="100%" alt="pdf"></embed>
      </div>
    );
  }
}

export default Resume;