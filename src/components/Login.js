import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig'; // Make sure your Firebase config file path is correct
import { useNavigate } from 'react-router-dom'; // For navigation
import './Login.css'; // Adjust the CSS file name as needed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('parent'); // Default role is parent

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
    <section>
      <div className="leaves">
        <div className="set">
          <div><img src="images/leaf_01.png" alt="Leaf 1" /></div>
          <div><img src="images/leaf_02.png" alt="Leaf 2" /></div>
          <div><img src="images/leaf_03.png" alt="Leaf 3" /></div>
          <div><img src="images/leaf_04.png" alt="Leaf 4" /></div>
          <div><img src="images/leaf_01.png" alt="Leaf 1" /></div>
          <div><img src="images/leaf_02.png" alt="Leaf 2" /></div>
          <div><img src="images/leaf_03.png" alt="Leaf 3" /></div>
          <div><img src="images/leaf_04.png" alt="Leaf 4" /></div>
        </div>
      </div>
      <img src="images/bg.jpg" className="bg" alt="Background" />
      <img src="images/girl.png" className="girl" alt="Girl" />
      <img src="images/trees.png" className="trees" alt="Trees" />
      <div className="login">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="inputBox">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="inputBox">
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)} 
              required
            >
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <div className="inputBox">
            <input type="submit" value="Login" id="btn" />
          </div>
        </form>
        <div className="group">
          <a href="#">Forget Password</a>
          <a href="/signup">Signup</a>
        </div>
      </div>
    </section>
  );
};

export default Login;
