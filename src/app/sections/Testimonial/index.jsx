import React from 'react';
// import './Testimonial.css'; // Make sure to create a corresponding CSS file for styling

const Testimonial = ({ rating=5, image, name }) => {
  return (
    <div className="testimonial">
      <p className="testimonial-text">“As a PM who can't code, I used to spend my Mondays copying data between spreadsheets. Now I just tell the AI what I want to track
      and it builds exactly that.”</p>
      <div className="testimonial-rating">
        {Array.from({ length: rating }, (_, index) => (
          <span key={index}>&#9733;</span>
        ))}
      </div>
      <img src={image} alt={`${name}'s picture`} className="testimonial-image" />
      <h3 className="testimonial-name">Mark Rodriguez</h3>
      <p className="testimonial-work">Senior PM at TechFlow</p>
    </div>
  );
};

export default Testimonial;