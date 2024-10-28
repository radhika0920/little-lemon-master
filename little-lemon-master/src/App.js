/*
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
*/

import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';  // Import the homepage component
import BookingPage from './components/BookingPage';  // Import the booking page component
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />  {/* Route for homepage */}
          <Route path="/booking" element={<BookingPage />} />  {/* Route for booking page */}
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
          {/* You can add more routes for other components as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
