import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { BiCamera } from 'react-icons/bi';
import axios from 'axios';

function ImageSearch() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [similarImageIds, setSimilarImageIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleCameraSearch = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
      //   (async () => {
      //     const capturedImage = await captureImageFromCamera(stream);
      //     makeAPICall(capturedImage);
      //     stream.getTracks().forEach((track) => {
      //       track.stop();
      //     });
      //   })();
      // })
      // .catch((error) => {
      //   console.error('Camera access error:', error);
      // });
  
    })
    .catch((error) => {
      console.error('Camera access error:', error);
    });
};

const makeAPICall = async (imageData) => {
  try {
    const formData = new FormData();
    formData.append('image', imageData);

    setIsLoading(true);

    const response = await axios.post(
      'https://huggingface.co/spaces/Thenujan/VPR_deploy',
      formData
    );

    if (response.status === 200) {
      if (response.data && Array.isArray(response.data)) {
        setSimilarImageIds(response.data);
      } else {
        console.error('Invalid response data');
      }
    } else {
      console.error('API request failed with status code', response.status);
    }

    setIsLoading(false);
  } catch (error) {
    console.error('API request failed:', error);
    setIsLoading(false);
  }
};


  useEffect(() => {
    if (selectedImage) {
      makeAPICall(selectedImage);
    }
  }, [selectedImage]);

  return (
    <div className="image-search-container">
      <div className="image_header">
        <div className="image_search">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <BsSearch className="search-icon" />
          <button className="camera-search-button" onClick={handleCameraSearch}>
            <BiCamera className="camera-icon" /> Camera Search
          </button>
          {selectedImage && (
            <div className="image-preview">
              <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" />
            </div>
          )}
        </div>
      </div>
      {isLoading && <p>Loading...</p>}
      {similarImageIds.length > 0 && (
        <div className="similar-image-ids">
          <h2>Similar Image IDs:</h2>
          <ul>
            {similarImageIds.map((imageId, index) => (
              <li key={index}>{imageId}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ImageSearch;
