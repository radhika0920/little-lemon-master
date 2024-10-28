import React from 'react';
import '../styles/Specials.css';

function Specials() {
  const specials = [
    { id: 1, name: "Greek Salad", description: "Fresh and crispy Greek salad.", price: "$12.99" },
    { id: 2, name: "Bruschetta", description: "Grilled bread with tomato topping.", price: "$10.99" },
    { id: 3, name: "Lemon Dessert", description: "Sweet lemon flavored dessert.", price: "$6.99" },
  ];

  return (
    <section className="specials">
      <h2>Specials</h2>
      <div className="specials-grid">
        {specials.map(item => (
          <div key={item.id} className="special-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
