import React, { useEffect, useState } from 'react';
import { firestore } from '../firebaseConfig'; // Adjust the import path as needed
import { collection, getDocs } from 'firebase/firestore';
import './FileDisplay.css'; // Optional: Create a CSS file for styling

const FileDisplay = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image for zooming

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError('');
      try {
        const imagesCollection = collection(firestore, 'files');
        const imagesSnapshot = await getDocs(imagesCollection);
        const imagesList = imagesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setImages(imagesList);
      } catch (error) {
        console.error('Error fetching images:', error);
        setError('Failed to fetch images. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (imageURL) => {
    setSelectedImage(imageURL); 
  };

  const closeModal = () => {
    setSelectedImage(null); 
  };

  if (loading) {
    return <p>Loading images...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="file-display-container">
      <h1>Uploaded Images</h1>
      <div className="image-list">
        {images.map((image) => (
          <div key={image.id} className="image-item" onClick={() => handleImageClick(image.fileURL)}>
            <h2>{image.title}</h2>
            <p>{image.description}</p>
            <img src={image.fileURL} alt={image.title} style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        ))}
      </div>

      
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Zoomed" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FileDisplay;
