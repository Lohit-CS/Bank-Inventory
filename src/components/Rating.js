// Rating.js
import React from 'react';

const Rating = ({ rating, updateRating }) => (
  <div>
    {[1, 2, 3, 4, 5].map(star => (
      <span key={star} onClick={() => updateRating(star)}>
        {star <= rating ? '★' : '☆'}
      </span>
    ))}
  </div>
);

export default Rating;
