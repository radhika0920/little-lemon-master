import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';

function Main() {
  const navigate = useNavigate();

  // Submit form data using submitAPI and navigate if successful
  const submitForm = (formData) => {
    const success = window.submitAPI(formData);
    if (success) {
      navigate('/booking-confirmed');
    } else {
      alert('Reservation failed. Please try again.');
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage submitForm={submitForm} />} />
      </Routes>
    </main>
  );
}

export default Main;
