import React, { useState } from 'react';

const EmailInput = ({ onSubmit }) => {
  const [emailContent, setEmailContent] = useState("");

  const handleSubmit = () => {
    if (emailContent.trim()) {
      onSubmit(emailContent);
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Email Spam Detector</h2>
      <textarea
        rows="10"
        cols="50"
        placeholder="Enter your email content here..."
        value={emailContent}
        onChange={(e) => setEmailContent(e.target.value)}
        style={{ width: '100%', padding: '10px' }}
      />
      <br />
      <button onClick={handleSubmit} style={{ marginTop: '10px', padding: '10px 20px' }}>
        Submit
      </button>
    </div>
  );
};

export default EmailInput;
