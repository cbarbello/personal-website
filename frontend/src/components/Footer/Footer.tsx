import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white p-4 mt-auto">
    <div className="container mx-auto text-center">
      <p>© {new Date().getFullYear()} Casey Barbello. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://github.com/cbarbello"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/cbarbello"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
