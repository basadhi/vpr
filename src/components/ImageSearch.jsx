import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import {BiCamera} from 'react-icons/bi'

function ImageSearch() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleCameraSearch = () => {
    
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // Handle the camera stream,
      })
      .catch((error) => {
        console.error('Camera access error:', error);
      });
  };

  return (
    <header className='image_header'>
      <div className='image_search'>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <BsSearch className="search-icon" />
        

        <button className="camera-search-button" onClick={handleCameraSearch}>
          <BiCamera className="camera-icon" /> Camera Search
        </button>
        

        {selectedImage && (
          <div className='image-preview'>
            <img src={URL.createObjectURL(selectedImage)} alt='Uploaded' />
          </div>
        )}

        {/* Additional search bar components can be added here */}
      </div>
    </header>
  );
}

export default ImageSearch;
