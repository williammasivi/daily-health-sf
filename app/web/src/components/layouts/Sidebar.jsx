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
import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { FaUserNurse } from 'react-icons/fa';
import { AiFillSetting, AiFillHome, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoIosAlarm } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`hidden min-h-screen overflow-hidden w-1/5  sm:block top-0 left-0 z-40 py-4 transition-transform transform bg-white border-r border-gray-200`} aria-label="Sidebar">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul className="space-y-2 font-medium">
          <li>
            <NavLink
              to="/"
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-200 group`}
            // style={({ isActive }) => isActive ? 'bg-red-500': '' }
            >

              <AiFillHome
                className="w-5 h-5 transition duration-75 group-hover:fill-blue-700"
                size={24}
                fill="currentColor"
              />
              <span className="ms-3 group-hover:text-blue-700">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/consultation" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <FaUserNurse
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                size={24}
                fill="currentColor"
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Consultation</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/pharmacylocator" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <ImLocation2
                fill="currentColor"
                size={24}
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Pharmacy Locator</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/medicationreminder" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <IoIosAlarm
                fill="currentColor"
                size={24}
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
              />
              <span className="flex-1 ms-3 whitespace-nowrap">Medication Reminder</span>
            </NavLink>

            <Link
              to="/settings"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <AiFillSetting className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
            </Link>
          </li>
          {/* <li>
            <NavLink to="/login" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/test">Test Upload file</NavLink>
          </li> */}
        </ul>
      </div>
    </aside>
  );
}
