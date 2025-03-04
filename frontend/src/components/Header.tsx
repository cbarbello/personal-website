import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className="bg-gray-900 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Casey Barbello</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
