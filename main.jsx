import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App3 from './src/App3.jsx'; // Updated to App3.jsx

// Create the root element
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
ReactDOM.render(<App3 />, document.getElementById('root'));

// Render the App component


// Alert for AI chatbot
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('aiChatbotAlertShown')) {
    alert("Welcome! There's an AI chatbot at the bottom right to help with the website.");
    localStorage.setItem('aiChatbotAlertShown', 'true');
  }
});
