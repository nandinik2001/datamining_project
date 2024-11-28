import React from 'react';

const ResultDisplay = ({ spamPercentage, notSpamPercentage }) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>Result</h3>
      <p style={{ color: 'red', fontSize: '18px' }}>{spamPercentage}% Spam</p>
      <p style={{ color: 'green', fontSize: '18px' }}>{notSpamPercentage}% Not Spam</p>
    </div>
  );
};

export default ResultDisplay;
