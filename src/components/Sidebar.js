// Sidebar.js

import React from 'react';

/**
 * Renders the sidebar component for the Greenbriar Band website.
 * @returns {JSX.Element} The rendered sidebar component.
 */
function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Greenbriar</h2>
      <p>Welcome to the official Greenbriar Band website! Explore our music and get to know the band.</p>
      <h3>Navigation</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/music">Music</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
