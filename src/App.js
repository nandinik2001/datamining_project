// import React, { useState } from 'react';
// import EmailInput from './components/EmailInput';
// import ResultDisplay from './components/ResultDisplay';
// import './App.css'; // Make sure this file includes layout styles

// const App = () => {
//   const [result, setResult] = useState(null);

//   const handleEmailSubmission = async (emailContent) => {
//     const response = await fetch('http://localhost:5000/predict', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ emailContent }),
//     });
//     const result = await response.json();
//     setResult(result);
//   };
  

//   return (
//     <div className="app-container">
//       <div className="input-section">
//         <EmailInput onSubmit={handleEmailSubmission} />
//       </div>
//       <div className="result-section">
//         {result && (
//           <ResultDisplay
//             spamPercentage={result.spamPercentage}
//             notSpamPercentage={result.notSpamPercentage}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import EmailInput from './components/EmailInput';
import ResultDisplay from './components/ResultDisplay';
import './App.css'; // Ensure this contains the updated CSS below

const App = () => {
  const [result, setResult] = useState(null);

  const handleEmailSubmission = async (emailContent) => {
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailContent }),
    });
    const result = await response.json();
    setResult(result);
  };

  return (
    <div className="app-container">
      <div className="input-section">
        <h2>Email Spam Detector</h2>
        <textarea
          placeholder="Enter your email content here..."
          rows="8"
        ></textarea>
        <button onClick={() => handleEmailSubmission("test email content")}>
          Submit
        </button>
        <p>Note: The model accuracy is 92%</p>
      </div>

      <div className="result-section">
        {result && (
          <div className="result-box">
            <h3>Result</h3>
            <p className="spam">{result.spamPercentage}% Spam</p>
            <p className="not-spam">{result.notSpamPercentage}% Not Spam</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
