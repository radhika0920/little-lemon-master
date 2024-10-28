import React from 'react';
import '../styles/CustomersSay.css';  // For specific styles related to Testimonials

function CustomersSay() {
  const testimonials = [
    { id: 1, name: "John Doe", feedback: "Amazing food and great service!", rating: 5 },
    { id: 2, name: "Jane Smith", feedback: "Best dining experience in Chicago!", rating: 4 },
    { id: 3, name: "Sam Green", feedback: "Delicious and worth the price.", rating: 5 },
  ];

  return (
    <section className="customers-say">
      <h2>What Our Customers Say</h2>
      <div className="testimonials">
        {testimonials.map(customer => (
          <div key={customer.id} className="testimonial">
            <p className="feedback">{customer.feedback}</p>
            <p className="customer-name">- {customer.name}</p>
            <p className="rating">Rating: {customer.rating} Stars</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;