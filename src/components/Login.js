import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig'; // Firebase configuration file
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('parent'); // State for role selection

  const auth = getAuth(app);
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Sign in the user
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');

      // Redirect based on the selected role
      if (role === 'teacher') {
        navigate('/teacher'); // Redirect to Teacher.js
      } else {
        navigate('/parent'); // Redirect to Parent.js
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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

        {/* Role Selection */}
        <select 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
          required
        >
          <option value="parent">Parent</option>
          <option value="teacher">Teacher</option>
        </select>

        {/* Submit Button */}
        <button type="submit">Login</button>
      </form>

      <div className="login-footer">
        <p>Don't have an account? <a href="/signup">Sign up here</a></p>
      </div>
    </div>
  );
};

export default Login;
