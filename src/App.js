import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <div className="container">
          <div className="column">
            <Sidebar />
          </div>
          <div className="column">
            <MainContent />
          </div>
        </div> {/* Closing tag for the div with class "container" */}
      </div> {/* Closing tag for the div with class "main-content" */}
      <Footer />
    </div>
  );
}

export default App;
