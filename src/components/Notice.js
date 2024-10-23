import React, { useState, useEffect } from 'react';
import { db, auth, firestore } from '../firebaseConfig'; // Ensure these are correctly imported
import { collection, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import './Notice.css'; // Optional: CSS for styling

const Notice = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [user, setUser] = useState(null); // Store user data

  useEffect(() => {
    // Check user authentication status
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // User is signed in
      } else {
        setUser(null); // No user is signed in
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!user) {
      setError('You must be logged in to add a notice.');
      return;
    }

    try {
      // Add notice to Firestore with user credentials
      const noticeRef = collection(firestore, 'notices');
      await addDoc(noticeRef, {
        title,
        content,
        createdAt: new Date().toISOString(), // Add a timestamp
        createdBy: user.email, // Store the user's email
      });
      setSuccess('Notice added successfully!');
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding notice:', error);
      setError('Failed to add notice. Please try again.');
    }
  };

  return (
    <div className="notice-container">
      <h1>Add Notice</h1>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Notice Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Notice Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Add Notice</button>
      </form>
    </div>
  );
};

export default Notice;
