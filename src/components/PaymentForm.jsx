import React, { useState } from 'react';
import './PaymentForm.css'; // Assuming you want to keep your CSS styles separate

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    student_name: '',
    student_id: '',
    email: '',
    fee_type: '',
    amount: '',
    payment_method: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic front-end validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (parseFloat(formData.amount) <= 0) {
      setError('Please enter an amount greater than 0.');
      return;
    }

    try {
      const response = await fetch('/submit-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess('Payment successful!');
      } else {
        setError(result.error || 'Payment failed. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error(err);
    }
  };

  return (
    <div className="payment-container">
      <h1>Fee Payment</h1>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        {/* Student Name */}
        <input
          type="text"
          name="student_name"
          placeholder="Student Name"
          value={formData.student_name}
          onChange={handleChange}
          required
        />

        {/* Student ID */}
        <input
          type="text"
          name="student_id"
          placeholder="Student ID"
          value={formData.student_id}
          onChange={handleChange}
          required
        />

        {/* Email Address */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Fee Type */}
        <select
          name="fee_type"
          value={formData.fee_type}
          onChange={handleChange}
          required
        >
          <option value="">Select Fee Type</option>
          <option value="tuition">Tuition Fee</option>
          <option value="transport">Transport Fee</option>
          <option value="library">Library Fee</option>
          <option value="activity">Activity Fee</option>
        </select>

        {/* Amount */}
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />

        {/* Payment Method */}
        <select
          name="payment_method"
          value={formData.payment_method}
          onChange={handleChange}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="credit_card">Credit Card</option>
          <option value="debit_card">Debit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank_transfer">Bank Transfer</option>
        </select>

        {/* Submit Button */}
        <button type="submit">Pay Now</button>
      </form>

      <div className="payment-footer">
        <p>Need assistance? <a href="#">Contact Support</a></p>
      </div>
    </div>
  );
};

export default PaymentForm;
