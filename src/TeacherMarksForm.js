import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebaseConfig';
import './TeacherMarksForm.css';

const TeacherMarksForm = () => {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [marks, setMarks] = useState({
    drawing: '',
    poem: '',
    writing: '',
    maths: ''
  });
  const [grades, setGrades] = useState({
    drawing: '',
    poem: '',
    writing: '',
    maths: ''
  });

  // Function to determine grade based on marks
  const calculateGrade = (marks) => {
    if (marks >= 90) return 'A';
    if (marks >= 80) return 'B';
    if (marks >= 70) return 'C';
    if (marks >= 60) return 'D';
    return 'F'; // Default grade for marks below 60
  };

  const handleMarksChange = (subject, value) => {
    const numValue = Number(value);
    setMarks({ ...marks, [subject]: value });

    // Calculate and set grade based on marks
    if (value) {
      setGrades({ ...grades, [subject]: calculateGrade(numValue) });
    } else {
      setGrades({ ...grades, [subject]: '' }); // Reset grade if marks input is cleared
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newStudent = {
      name: studentName,
      marks,
      grades
    };

    try {
      // Add the student to Firestore
      await addDoc(collection(db, "students"), newStudent);
      // Update local state
      setStudents([...students, newStudent]);
      setStudentName('');
      setMarks({
        drawing: '',
        poem: '',
        writing: '',
        maths: ''
      });
      setGrades({
        drawing: '',
        poem: '',
        writing: '',
        maths: ''
      });
      alert("Student added successfully!");
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Failed to add student.");
    }
  };

  return (
    <div className="form-container"><br /><br /><br /> 
    <br /><br /><br />
    
      <h2>Std - Junior Marks & Grades</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter student's name"
            required
          />
        </div>

        {/* Subjects with Marks and Grades */}
        {['drawing', 'poem', 'writing', 'maths'].map((subject) => (
          <div className="form-group" key={subject}>
            <label htmlFor={subject}>{`${subject.charAt(0).toUpperCase() + subject.slice(1)} Marks`}</label>
            <input
              type="number"
              id={subject}
              value={marks[subject]}
              onChange={(e) => handleMarksChange(subject, e.target.value)} // Update the handler for each subject
              placeholder={`Enter marks for ${subject}`}
              min="0"
              max="100"
              required
            />
            <label>Grade: {grades[subject]}</label>
          </div>
        ))}

        <button type="submit" className="submit-btn">Add Student</button>
      </form>

      {/* Displaying Students */}
      <div className="student-list">
        <h3>Students List</h3>
        {students.length > 0 ? (
          <ul>
            {students.map((student, index) => (
              <li key={index}>
                <strong>{student.name}</strong> - 
                {Object.keys(student.marks).map(subject => (
                  <span key={subject}>{` ${subject.charAt(0).toUpperCase() + subject.slice(1)}: ${student.marks[subject]} (Grade: ${student.grades[subject]})`}</span>
                ))}
              </li>
            ))}
          </ul>
        ) : (
          <p>No students added yet.</p>
        )}
      </div>
    </div>
  );
};

export default TeacherMarksForm;
