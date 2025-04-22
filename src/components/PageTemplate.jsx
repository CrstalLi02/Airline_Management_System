import React from 'react';
import { Link } from 'react-router-dom';

const PageTemplate = ({ title, description, children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Link to="/" className="inline-block text-gray-600 mb-6">
          Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        {description && <p className="text-gray-500 mb-8">{description}</p>}

        <div className="bg-white p-8 rounded-lg shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;
