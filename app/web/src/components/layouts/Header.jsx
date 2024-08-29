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
import { IoNotifications } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <header className="bg-white text-gray-900 border-gray-200 border-b">
      <div className="mx-auto p-4 flex justify-between items-center">
        <Link to="/" className='flex items-center gap-3 cursor-pointer'>
          <img
            src="/DAILY.png"
            alt="Logo"
            className={`h-10 w-10 rounded-full border border-gray-200`}
          />
          <h1 className="text-2xl font-bold transition-colors duration-300">
            DAILY HEALTH
          </h1>
        </Link>


        {/* Avatar */}

{/*         <div>
          <IoNotifications
            size={40}
            color='#000'
          />
        </div> */}
        <div className="relative">
          <FaUserCircle
            className="w-10 h-10 cursor-pointer fill-gray-900"
            onClick={handleDropdownToggle}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg z-50">
              <div className="px-4 py-2">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-600">john.doe@example.com</p>
              </div>
              <div className="border-t border-gray-200"></div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <p>Profile</p>
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <p>Settings</p>
              </div>
              <div className="border-t border-gray-200"></div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <p>Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
