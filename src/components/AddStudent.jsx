import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from '../firebaseConfig';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [std, setStd] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [parentName, setParentName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch students data from Firestore
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const snapshot = await getDocs(collection(firestore, 'students'));
        const studentsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStudents(studentsData);
      } catch (err) {
        console.error('Error fetching students:', err);
      }
    };

    fetchStudents();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await addDoc(collection(firestore, 'students'), {
        name,
        std,
        rollNo,
        parentName,
        contactNo,
      });
      alert('Student added successfully!');

      // Update the students list immediately
      setStudents((prevStudents) => [
        ...prevStudents,
        { name, std, rollNo, parentName, contactNo },
      ]);

      // Clear form
      setName('');
      setStd('');
      setRollNo('');
      setParentName('');
      setContactNo('');
    } catch (err) {
      setError('Failed to add student: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Student Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
  <label htmlFor="std">Standard:</label>
  <select
    id="std"
    value={std}
    onChange={(e) => setStd(e.target.value)}
    required
  >
    <option value="">Select Standard</option>
    <option value="Nursery">Nursery</option>
    <option value="Jr">Jr.</option>
    <option value="Sr">Sr.</option>
  </select>
</div>

        <div>
          <label htmlFor="rollNo">Roll No:</label>
          <input
            type="text"
            id="rollNo"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="parentName">Parent Name:</label>
          <input
            type="text"
            id="parentName"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="contactNo">Contact No:</label>
          <input
            type="text"
            id="contactNo"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Student'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      {/* List of students */}
      <h2>List of Students</h2>
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Standard</th>
            <th>Roll No</th>
            <th>Parent Name</th>
            <th>Contact No</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.std}</td>
                <td>{student.rollNo}</td>
                <td>{student.parentName}</td>
                <td>{student.contactNo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No students added yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AddStudent;
