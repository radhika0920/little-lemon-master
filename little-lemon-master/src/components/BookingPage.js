import React from 'react';
import BookingForm from './BookingForm';
import '../styles/BookingPage.css';  // For specific styles related to Booking page

/*
function BookingPage() {
  return (
    <section className="booking-page">
      <h2>Reserve a Table</h2>
      <form className="booking-form">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required />
        
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" required />
        
        <label htmlFor="guests">Number of Guests:</label>
        <input type="number" id="guests" name="guests" min="1" max="10" required />
        
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

export default BookingPage;
*/

function BookingPage({ submitForm }) {
  return (
    <div>
      <h1>Book Your Table</h1>
      <BookingForm submitForm={submitForm} />
    </div>
  );
}

export default BookingPage;