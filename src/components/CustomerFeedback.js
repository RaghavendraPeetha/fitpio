import React from 'react';
import '../styles/CustomerFeedback.css';

const feedbacks = [
  {
    customer: 'Jenny Wilson',
    img_url:"https://images.unsplash.com/photo-1587778082149-bd5b1bf5d3fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NDUyNDk0fHxlbnwwfHx8fHw%3D",
    rating: 5,
    feedback: 'The food was excellent and so was the service. They were very conscientious about gluten allergies.'
  },
  {
    customer: 'Dianne Russell',
    img_url:"https://images.unsplash.com/photo-1592011159356-3a1f7c74e784?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8OTQ1MjQ5NHx8ZW58MHx8fHx8",
    rating: 4,
    feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.'
  },
  {
    customer: 'Devon Lane',
    img_url:"https://images.unsplash.com/photo-1593840715437-4d7e132f7671?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw5NDUyNDk0fHxlbnwwfHx8fHw%3D",
    rating: 5,
    feedback: 'Normally wings are wings, but theirs are lean meaty and tender, and cooked to a crispy perfection.'
  }
];

const CustomerFeedback = () => {
  return (
    <div className="customer-feedback">
      <h3>Customer's Feedback</h3>
      <div className='feedback-container'>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback">
          <div className="customer-info">
            <div className="customer-pic">
              <img src={feedback.img_url} alt={feedback.customer} />
            </div>
            <div className="customer-details">
              <h4>{feedback.customer}</h4>
              <div className="rating">
                {'★'.repeat(feedback.rating)}
                {'☆'.repeat(5 - feedback.rating)} 
              </div>
            </div>
          </div>
          <p>{feedback.feedback}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default CustomerFeedback

