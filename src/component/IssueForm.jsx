import React, { useState } from 'react';
import { reportIssue } from '../services/api';

function IssueForm() {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await reportIssue({ description, location });
      setStatus('Issue reported successfully!');
    } catch (error) {
      setStatus('Failed to report issue.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button type="submit">Report Issue</button>
      <p>{status}</p>
    </form>
  );
}

export default IssueForm;
