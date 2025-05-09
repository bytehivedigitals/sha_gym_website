import React, { useState } from 'react';

const Contact = () => {
  // State to store the email entered by the user
  const [email, setEmail] = useState('');

  // Handler function for opening the mail client
  const handleMailClick = () => {
    if (email.trim() === '') {
      alert('Please enter a valid email address.');
      return;
    }
    window.location.href = `mailto:${email}?subject=Join Our Community&body=I would like to join your community!`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-white shadow-lg rounded-[3rem] p-[10%] w-full max-w-[90%] text-center border border-gray-300">
        {/* Heading */}
        <p className="text-[5rem] font-bold text-gray-900 mb-6">
          Connect Engage Transform
        </p>
        {/* Subtext */}
        <p className="text-gray-600 text-lg mb-10">
          Join A Vibrant Community For Fuel Motivation, Engagement Drives Progress, And Transformation
        </p>
        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            value={email} // Bind the input value to the state
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
            placeholder="your email"
            className="h-[5rem] w-[58rem] px-8 py-2 rounded-lg shadow-sm border-gray-300 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleMailClick} // Attach the handler here
            className="w-[14rem] h-[5rem] px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300 cursor-pointer"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;