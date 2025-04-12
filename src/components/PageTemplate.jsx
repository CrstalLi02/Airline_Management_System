import React from 'react';
import { Link } from 'react-router-dom';

const PageTemplate = ({ title, description, children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Link to="/" className="inline-flex items-center text-gray-600 mb-6">
          <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8H21L21 10H3V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 10H19V17H5V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 17V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 17V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 10L15 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {title}
        </h1>
        <p className="text-gray-500 mb-8">{description}</p>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          {children}
        </div>
      </div>
      
      <footer className="w-full py-4 mt-12 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          Airline Management System
        </div>
      </footer>
    </div>
  );
};

export default PageTemplate; 