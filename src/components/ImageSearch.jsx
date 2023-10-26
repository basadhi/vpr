import React, { useState } from 'react';
import {BsSearch} from 'react-icons/bs';

function ImageSearch() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (

    <header className='image_header'>{
    <div className='image_search'>
      <input type="file" accept="image/*"  onChange={handleImageChange}/>
      <BsSearch className="search-icon"/>
      <p>Upload an image for search</p>

      {selectedImage && (
        <div className='image-preview'>
          <img src={selectedImage} alt='Uploaded'/>
          </div>
        )}
        


      {/* Additional search bar components can be added here */}
    </div>}
    </header>
  );
}

export default ImageSearch;
