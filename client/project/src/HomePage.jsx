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
      <img src="https://cdn.discordapp.com/attachments/1071021687845421096/1106584507743752252/Untitled_design-removebg-preview.png" alt="Logo" /> <br />

      <video width="640" height="360" autoplay  controls>
        <source
          src="https://res.cloudinary.com/dk9hepbrk/video/upload/v1683902406/Untitled_design_1_1_a53s3g.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/dk9hepbrk/video/upload/v1683902406/Untitled_design_1_1_a53s3g.mp4"
          type="video/webm"
        />
        <p>
          
          <a href="https://res.cloudinary.com/dk9hepbrk/video/upload/v1683902406/Untitled_design_1_1_a53s3g.mp4" ></a>
          instead.
        </p>
      </video>
      <video width="640" height="350" autoplay  controls>
        <source
          src="https://res.cloudinary.com/dk9hepbrk/video/upload/v1683904006/Untitled_design_1_sblr8r.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/dk9hepbrk/video/upload/v1683904006/Untitled_design_1_sblr8r.mp4"
          type="video/webm"
        />
        <p>
          
          <a href="https://res.cloudinary.com/dk9hepbrk/video/upload/v1683904006/Untitled_design_1_sblr8r.mp4" ></a>
          instead.
        </p>
      </video>

      <footer>
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
}

export default HomePage;