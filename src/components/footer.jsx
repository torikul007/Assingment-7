import React from 'react';
import logoFooter from './assets/logo-footer.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mt-40 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        
        <div>

          <h3 className="text-xl font-mono  font-semibold mb-2">About Us</h3>
          <p className="text-xl">
          We are a passionate team dedicated to providing the best services to our customers.
          </p>
        </div>

        {/* quick links */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/*  Subscription */}
        <div className="text-right">
          <h3 className="text-xl font-semibold mb-2">Subscribe</h3>
          <p className="text-xl mb-4">
          Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex justify-end">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-xl bg-gray-700 border-none text-white w-2/3"
            />
            <button className="bg-green-400 px-4 py-2 rounded-xl hover:bg-black">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
