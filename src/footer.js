import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-700 text-white py-2 text-center">
      <div className="text-sm font-bold mb-1">Created by Kevin Raval</div>
      <div className="flex justify-center space-x-2">
        <a
          href="https://github.com/kevinrawal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          GitHub
        </a>
        <a
          href="https://dev.to/kevinrawal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          DEV
        </a>
        <a
          href="https://leetcode.com/win-son/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          LeetCode
        </a>
      </div>
    </div>
  );
}

export default Footer;
