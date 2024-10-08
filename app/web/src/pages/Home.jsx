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
import React from 'react';
import { Link } from "react-router-dom";
import { FaUserNurse, FaMapMarkerAlt, FaPills } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import Footer from '../components/layouts/Footer';

export default function Home() {
  return (
    <div className="min-h-screen overflow-y-scroll text-gray-900">
      <main className="px-5 py-4">
        <section className="">
          <h2 className="text-4xl font-bold mb-5">Welcome to daily-health</h2>
          <p className="text-lg text-gray-700 py-4">
            Revolutionizing online health management with features like remote medical consultations,
            pharmacy location, and medication reminders.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-[20px]">
          <div className="bg-white p-6 rounded-lg flex flex-col items-center border border-gray-200 transition-transform transform hover:scale-105">
            <FaUserNurse className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Consultation</h3>
            <p className="text-gray-700 text-blue-500 text-center">
              Get remote medical consultations from the comfort of your home.
            </p>
            <Link to="/consultation" className="text-blue-500 hover:underline mt-4 inline-block">Learn More</Link>
          </div>

          <div className="bg-white p-6 rounded-lg flex flex-col items-center border border-gray-200 transition-transform transform hover:scale-105">
            <FaMapMarkerAlt className="text-4xl text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Pharmacy Locator</h3>
            <p className="text-gray-700 text-blue-500 text-center">
              Find nearby pharmacies quickly and easily.
            </p>
            <Link to="/pharmacylocator" className="text-green-500 hover:underline mt-4 inline-block">Learn More</Link>
          </div>

          <div className="bg-white p-6 rounded-lg flex flex-col items-center border border-gray-200 transition-transform transform hover:scale-105">
            <FaPills className="text-4xl text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Medication Reminder</h3>
            <p className="text-gray-700 text-blue-500 text-center">
              Never miss a dose with our medication reminder feature.
            </p>
            <Link to="/medicationreminder" className="text-red-500 hover:underline mt-4 inline-block">Learn More</Link>
          </div>
        </section>
        {/* <Footer /> */}
      </main>
    </div>
  );
}

