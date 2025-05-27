import React from 'react'
import Section from './components/Section'
import selectionData from './assets/selectionData.json'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header Netflix */}
      <header className="header">
        <h1 className="logo">NETFLIX</h1>
      </header>

      {/* Main content */}
      <main clasname="main">
        {selectionData.map((section, index) => (
          <Section 
            key={index}
            category={section.category}
            images={section.images}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
