import React from 'react';

const About = () => {
  const containerStyle = {
    margin: '0 auto',
    padding: '40px',
    maxWidth: '900px',
    textAlign: 'center',
     background: "linear-gradient(to right, rgb(169, 91, 18),black)",
    borderRadius: '50%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e0e0e0',
  };
  const socialBtnStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#fff',
    transition: 'all 0.3s ease',
    };

    return (
    <div style={containerStyle}>
        <img src="/dp.jpg"
         alt="@Dhruv kumar" 
         style={{width: '180px', height: '180px',borderRadius: '50px',objectFit: 'cover',
            border: '2px solid #ccc', marginBottom: '20px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}/>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px',color: '#333' }}>About Me</h1>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '20px',color: '#666' }}>Hello, I'm Dhruv kumar!</h1>
    </div>     
    );

};

export default About;