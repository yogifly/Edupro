import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Eschool from './components/Eschool';
import Signup from './components/Signup';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import Parent from './components/Parent';
import Teacher from './components/Teacher';
import Notice from './components/Notice';
import FileUpload from './components/FileUpload';
import FileDisplay from './components/FileDisplay';
import Academics from './components/Academics';
import HomeActivities from './components/HomeActivities';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Eschool />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/notices" component={Notice} />
          <Route path="/upload" element={<FileUpload />} />
          <Route path="/files" element={<FileDisplay />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/activities" element={<HomeActivities />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;