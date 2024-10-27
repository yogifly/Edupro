// PaymentPage.js
import React, { useState } from 'react';
import './PaymentPage.css'

const PaymentPage = () => {
  const [studentName, setStudentName] = useState('');
  const [standard, setStandard] = useState('');
  const [division, setDivision] = useState('');
  const [fee, setFee] = useState(0);

  const fees = {
    '1': 1000, // Standard 1 fee
    '2': 1500, // Standard 2 fee
    '3': 2000  // Standard 3 fee
  };

  const handleStandardChange = (e) => {
    const selectedStandard = e.target.value;
    setStandard(selectedStandard);
    setFee(fees[selectedStandard] || 0); // Update fee based on selected standard
  };

  const handlePayment = () => {
    const options = {
      key: "rzp_test_22YpxagEoYtImx", // Your Razorpay Key ID
      amount: fee * 100, // Amount in paise
      currency: 'INR',
      name: 'School Fees Payment',
      description: 'Payment for Standard ' + standard,
      handler: (response) => {
        // Handle successful payment here
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: studentName,
        email: '', // You can add email input if needed
        contact: '', // You can add contact input if needed
      },
      notes: {
        division: division,
      },
      theme: {
        color: '#F37254',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="payment-page-container">
      <h2>Payment Page</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <select value={standard} onChange={handleStandardChange}>
        <option value="">Select Standard</option>
        <option value="1">Standard 1</option>
        <option value="2">Standard 2</option>
        <option value="3">Standard 3</option>
      </select>
      <select value={division} onChange={(e) => setDivision(e.target.value)}>
        <option value="">Select Division</option>
        <option value="A">Division A</option>
        <option value="B">Division B</option>
        <option value="C">Division C</option>
      </select>
      <div>
        <strong>Fees: ₹{fee}</strong>
      </div>
      <button onClick={handlePayment} disabled={!studentName || !standard}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
