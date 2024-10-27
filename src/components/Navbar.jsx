// Navbar.jsx
import logo from './assets/logo.png';
import coinLogo from './assets/coin.png';

const Navbar = ({ coins }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 text-black">
      {/* Logo */}
      <img src={logo} alt="loading image" />

      {/* Menu Items */}
      <ul className="hidden md:flex space-x-10">
        <li className="cursor-pointer hover:text-gray-700">Home</li>
        <li className="cursor-pointer hover:text-gray-700">Features</li>
        <li className="cursor-pointer hover:text-gray-700">Teams</li>
        <li className="cursor-pointer hover:text-gray-700">Schedule</li>
      </ul>

      {/* Coin Button */}
      <div className="flex items-center gap-2">
        <img src={coinLogo} alt="coin logo" />
        <p className="font-semibold md:text-xl text-black">{coins} coins</p>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
