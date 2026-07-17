import React from 'react';

export default function RandomCard({ title, description }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', maxWidth: '300px' }}>
      <h2>{title || 'Random Title'}</h2>
      <p>{description || 'This is a randomly generated React component for demonstration purposes.'}</p>
      <button onClick={() => alert('Hello Mark!')}>
        Click Me
      </button>
    </div>
  );
}
