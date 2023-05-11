import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <button id="button">Teacher</button>
      </div>
      <img src="https://media.istockphoto.com/vectors/school-female-teacher-vector-id690861988?k=6&m=690861988&s=170667a&w=0&h=cylgUeOBP8jI66z1qz_Jc-1ehfidjeIepIuBKqxoaZ8=" alt="Logo" />
      <footer>
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
}

export default HomePage;