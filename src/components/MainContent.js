// MainContent.js

import React from 'react';

function MainContent() {
  return (
    <div className="main-content">
      <h1>Welcome to Greenbriar Band</h1>
      <p>
        Greenbriar is a three-piece band that brings a unique folkish twist to 90's rock, pop, and pop-punk covers.
        Explore our collection of songs and stay tuned for updates on our latest performances.
      </p>

      <h2>Latest Releases</h2>
      <div className="song-list">
        <div className="song">
          <h3>Song Title 1</h3>
          <p>Artist: Greenbriar</p>
          <audio controls>
            <source src='/assets/audio/brightest.mp3' type='audio/mp3' />
            Your browser does not support the audio tag.
          </audio>
        </div>

        <div className="song">
          <h3>Song Title 2</h3>
          <p>Artist: Greenbriar</p>
          <audio controls>
            <source src="/path-to-audio/song2.mp3" type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
