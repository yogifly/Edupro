// StudentView.js
import React, { useEffect, useState } from 'react';
import { storage } from '../firebaseConfig';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import './StudentView.css'; // Importing the StudentView CSS

const StudentView = () => {
  const [files, setFiles] = useState([]);
  const [fileTypes, setFileTypes] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const storageRef = ref(storage, 'communication/');
      try {
        const res = await listAll(storageRef);
        const urls = await Promise.all(res.items.map(item => getDownloadURL(item)));
        setFiles(urls);
        setFileTypes(res.items.map(item => item.name.split('.').pop())); // Get file types
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="student-view-container">
      <h2>Student View</h2>
      <h3>Uploaded Files</h3>
      <div className="media-container">
        {files.map((file, index) => (
          <div key={index} className="media-item">
            {fileTypes[index] === 'mp3' || fileTypes[index] === 'wav' ? (
              <audio controls>
                <source src={file} type={`audio/${fileTypes[index]}`} />
                Your browser does not support the audio element.
              </audio>
            ) : fileTypes[index] === 'mp4' || fileTypes[index] === 'webm' ? (
              <video controls width="400">
                <source src={file} type={`video/${fileTypes[index]}`} />
                Your browser does not support the video element.
              </video>
            ) : (
              <p>Unsupported file type: {fileTypes[index]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentView;
