import React from 'react';

/**
 * TestComponent - A simple React component for testing purposes.
 */
const TestComponent = ({ title = 'Hello from Test Component', message = 'This is a test React component.' }) => {
  return (
    <div className="test-component" style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default TestComponent;
