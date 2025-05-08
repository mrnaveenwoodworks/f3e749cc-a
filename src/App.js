import React from 'react';
import HelloWorld from './components/HelloWorld';
import './styles/App.css';

function App() {
  return (
    <div className="app-container min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="content-wrapper z-10 text-center">
        <HelloWorld />
        <p className="mt-8 text-white text-opacity-80 fade-in">
          A simple React app with animations
        </p>
      </div>
    </div>
  );
}

export default App;