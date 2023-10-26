import React from 'react';
import ImageSearch from '../components/ImageSearch';
import './home.css'; // Import the CSS file

function Home() {
  return (
    <div>
      <header className='image_header'>
        <div className='image_search'>
          <ImageSearch />
          {/* Additional content can be added here */}
        </div>
      </header>
    </div>
  );
}

export default Home;
