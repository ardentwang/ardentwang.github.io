import React from 'react';

const EducationItem = ({
  logo, 
  institution, 
  title1, 
  description1, 
  title2, 
  description2, 
  timeframe,
  bgColor = '#ffffff',   // Default white background color
  textColor = '#000000'  // Default black text color
}) => {
  return (
    <div style={{ ...styles.container, backgroundColor: bgColor }}>
      <img src={logo} alt={`${institution} logo`} style={styles.logo} />
      <div style={{ ...styles.details, color: textColor }}>
        <h2>{institution}</h2>
        <p><strong>{title1}</strong> {description1}</p>
        <p><strong>Timeframe:</strong> {timeframe}</p>
        <p><strong>{title2}</strong> {description2}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.6)',
  },
  logo: {
    width: '80px',
    height: '80px',
    marginRight: '20px',
    borderRadius: '50%',
  },
  details: {
    flex: 1,
  }
}

export default EducationItem;


