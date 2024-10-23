import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { app } from '../firebaseConfig'; // Firebase configuration file
import './Signup.css';

const Signup = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const auth = getAuth(app);
  const firestore = getFirestore(app);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Create user with email and password in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Determine the Firestore collection based on the role
      const collectionName = role === 'teacher' ? 'teachers' : 'parents';

      // Save user data to Firestore in the corresponding collection
      await setDoc(doc(collection(firestore, collectionName), user.uid), {
        fullname,
        email,
        role,
        uid: user.uid,
      });

      alert(`User registered successfully as a ${role}!`);
    } catch (error) {
      console.error('Error registering user:', error);
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h1>Create an Account</h1>
      <form onSubmit={handleSignup}>
        {/* Full Name */}
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
        />

        {/* Email Address */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Select Role */}
        <select name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Select Role</option>
          <option value="teacher">Teacher</option>
          <option value="parent">Parent</option>
        </select>

        {/* Submit Button */}
        <button type="submit">Sign Up</button>
      </form>

      <div className="signup-footer">
        <p>Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
};

export default Signup;
