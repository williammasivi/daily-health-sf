/**
 * @license
 * Copyright 2024 William Masivi, sofia and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoColor, setLogoColor] = useState('text-gray-800'); // Default color

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogoClick = () => {
    // Toggle color between two states (could be more colors)
    setLogoColor(logoColor === 'text-gray-800' ? 'text-blue-500' : 'text-gray-800');
  };

  return (
    <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="/DAILY.png" 
            alt="Logo" 
            className={`h-14 w-14 rounded-full transition-transform transform hover:scale-125 hover:rotate-6 duration-300 shadow-lg ${logoColor}`} 
            onClick={handleLogoClick}
          />
        </div>

        {/* Project Name */}
        <h1 className="text-xl font-bold transition-colors hover:text-blue-500 duration-300">
          daily-health
        </h1>

        {/* Avatar */}
        <div className="relative">
          <button 
            className="flex items-center space-x-2 focus:outline-none"
            onClick={handleDropdownToggle}
          >
            <FaUserCircle className="text-3xl" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md shadow-lg z-50">
              <div className="px-4 py-2">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">john.doe@example.com</p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-600"></div>
              <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                <p>Profile</p>
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                <p>Settings</p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-600"></div>
              <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                <p>Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Favicon */}
      <link rel="icon" href="/DAILY.png" />
    </header>
  );
}
