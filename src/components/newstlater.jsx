// Newsletter.js
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="relative flex justify-center -mb-40 z-10">
      <div className="w-[1000px] h-[300px] bg-green-400 shadow-lg rounded-full p-8 text-center">
        <h2 className="text-2xl font-bold mb-6 font-mono">Subscribe to Our Newsletter</h2>
        <p className="font-extrabold text-xl pb-4">Get the latest updates and news right in your inbox!</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter Your email"
            value={email}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded w-2/3 mb-4"
            required
          />
          <button
            type="submit"
            className="font-serif bg-red-500 text-white px-6 py-3 rounded-full hover:bg-black transition duration-300"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default Newsletter;
