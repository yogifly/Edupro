import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig'; // Ensure the path is correct
import './ParentProgressBar.css';

const ParentProgressBar = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        const studentData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setStudents(studentData);
        setFilteredStudents(studentData); // Initialize filtered students with all students
      } catch (error) {
        console.error("Error fetching students' data:", error);
      }
    };

    fetchStudents();
  }, []);

  // Update filtered students based on search term
  useEffect(() => {
    const results = students.filter(student => 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (student.rollNo && student.rollNo.toString().includes(searchTerm)) // Check if rollNo exists
    );
    setFilteredStudents(results);
  }, [searchTerm, students]);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const handleBack = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="progress-container">
      <h2>Students' Marks Progress</h2>
      <input
        type="text"
        placeholder="Search by Name or Roll No"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {selectedStudent ? (
        <div>
          <h3>{selectedStudent.name}'s Progress</h3>
          <button onClick={handleBack}>Back</button>
          <div className="progress-bars">
            {selectedStudent.marks && typeof selectedStudent.marks === 'object' ? (
              Object.keys(selectedStudent.marks).map(subject => (
                <div key={subject} className="subject-progress">
                  <span>{subject.charAt(0).toUpperCase() + subject.slice(1)}:</span>
                  <div className="bar-container">
                    <div
                      className="progress"
                      style={{ width: `${selectedStudent.marks[subject]}%`, backgroundColor: getProgressColor(selectedStudent.marks[subject]) }}
                    >
                      {selectedStudent.marks[subject]}%
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No marks available</p> // Fallback for when marks do not exist
            )}
          </div>
          <span className="grade">Grade: {selectedStudent.grade}</span>
        </div>
      ) : (
        <div>
          {filteredStudents.length > 0 ? (
            <div className="student-list">
              {filteredStudents.map((student) => (
                <div key={student.id} className="student-item" onClick={() => handleStudentClick(student)}>
                  <span className="student-name">{student.name} (Roll No: {student.rollNo})</span>
                </div>
              ))}
            </div>
          ) : (
            <p>No students' data available.</p>
          )}
        </div>
      )}
    </div>
  );
};

// Function to determine color based on marks
const getProgressColor = (marks) => {
  if (marks >= 90) return '#4caf50'; // Green
  if (marks >= 80) return '#8bc34a'; // Light Green
  if (marks >= 70) return '#ffeb3b'; // Yellow
  if (marks >= 60) return '#ff9800'; // Orange
  return '#f44336'; // Red
};

export default ParentProgressBar;
