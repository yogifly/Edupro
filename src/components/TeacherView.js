// TeacherView.js
import React, { useState } from 'react';
import { storage } from '../firebaseConfig'; // Adjust the path based on your file structure
import { ref, uploadBytes } from 'firebase/storage';
import './TeacherView.css'; 

const TeacherView = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    const storageRef = ref(storage, `communication/${file.name}`);
    try {
      await uploadBytes(storageRef, file);
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
      setFile(null); // Clear the file input
    }
  };

  return (
    <div>
      <h1>Teacher View</h1>
      <input type="file" accept="audio/*,video/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default TeacherView;
