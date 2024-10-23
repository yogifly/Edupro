import React, { useState } from 'react';
import { firestore, storage } from '../firebaseConfig'; // Ensure these are correctly imported
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './FileUpload.css'; // Optional: CSS for styling

const FileUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    // Check if the selected file is an image
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
      setError(''); // Clear error if a valid image is selected
    } else {
      setFile(null);
      setError('Please upload a valid image file (jpg, jpeg, png, gif).');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!file) {
      setError('Please select an image file to upload.');
      return;
    }

    try {
      // Upload file to Firebase Storage
      const fileRef = ref(storage, `uploads/${file.name}`);
      await uploadBytes(fileRef, file);

      // Get the download URL
      const fileURL = await getDownloadURL(fileRef);

      // Add file metadata to Firestore
      const fileMetadataRef = collection(firestore, 'files');
      await addDoc(fileMetadataRef, {
        title,
        description,
        fileURL,
        createdAt: new Date().toISOString(),
      });

      setSuccess('Image uploaded successfully!');
      setTitle('');
      setDescription('');
      setFile(null);
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Failed to upload image. Please try again.');
    }
  };

  return (
    <div className="file-upload-container">
      <h1>Upload Image</h1>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="file"
          accept="image/*" // Only accept image files
          onChange={handleFileChange}
          required
        />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
};

export default FileUpload;
