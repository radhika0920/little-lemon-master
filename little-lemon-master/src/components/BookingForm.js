/*
import React, { useState } from 'react';

function BookingForm() {
  // Step 3: Define state variables for form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  // Step 3: Available times state
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', { date, time, guests, occasion });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
      />

      <label htmlFor="res-time">Choose time</label>
      <select 
        id="res-time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        id="guests" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
        min="1" 
        max="10" 
        required 
      />

      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => setOccasion(e.target.value)} 
        required
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
*/
/*
import React, { useState, useEffect } from 'react';

function BookingForm({ submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);

  // Fetch available times on component mount for today's date
  useEffect(() => {
    const today = new Date();
    const times = window.fetchAPI(today);
    setAvailableTimes(times);
  }, []);

  // Update available times when the date changes
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    const times = window.fetchAPI(new Date(selectedDate));
    setAvailableTimes(times);
  };

  // Use the submitForm prop function instead of calling submitAPI directly
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData); // Calls the submitForm prop function
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="">Select a time</option>
        {availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        max="10"
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
*/

import React, { useState, useEffect } from 'react';

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const today = new Date();
    const times = window.fetchAPI(today);
    setAvailableTimes(times);
  }, []);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    const times = window.fetchAPI(new Date(selectedDate));
    setAvailableTimes(times);
  };

  const handleGuestChange = (e) => {
    const value = Math.max(1, Math.min(10, e.target.value)); // Ensure guests are between 1 and 10
    setGuests(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', { date, time, guests, occasion });
    const formData = { date, time, guests, occasion };
    const success = window.submitAPI(formData);
    if (success) {
      alert('Reservation successful!');
    } else {
      alert('Reservation failed. Please try again.');
    }
  };

  // Validate the form
  const validateForm = () => {
    const isValid = date && time && guests >= 1 && occasion;
    setIsFormValid(isValid);
  };

  // Run validation whenever inputs change
  useEffect(() => {
    validateForm();
  }, [date, time, guests, occasion]);

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={handleGuestChange}
        min="1"
        max="10"
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" disabled={!isFormValid} />
    </form>
  );
}

export default BookingForm;


