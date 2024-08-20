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
import Footer from '../components/layouts/Footer';
import { FaUserCircle } from 'react-icons/fa';
import SearchBar from '../components/ui/SearchBar';

const doctors = [
   { id: 'doctor1', name: 'Dr. John Doe', specialty: 'Cardiologist', description: 'Specializes in heart health and cardiovascular diseases.' },
   { id: 'doctor2', name: 'Dr. Jane Smith', specialty: 'Dermatologist', description: 'Expert in skin conditions, including eczema and psoriasis.' },
   { id: 'doctor3', name: 'Dr. Emily Johnson', specialty: 'Pediatrician', description: 'Specializes in the health and medical care of children.' },
   // Add more doctors as needed
];

const itemsPerPage = 3;

export default function Consultation() {
   const [avatars, setAvatars] = useState({});
   const [currentPage, setCurrentPage] = useState(0);

   const handleAvatarUpload = (e, doctorId) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setAvatars(prev => ({ ...prev, [doctorId]: reader.result }));
         };
         reader.readAsDataURL(file);
      }
   };

   const handleLoadMore = () => {
      setCurrentPage(prev => prev + 1);
   };

   const handleReturn = () => {
      setCurrentPage(prev => (prev > 0 ? prev - 1 : 0));
   };

   const currentDoctors = doctors.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

   return (
      <div className='min-h-screen bg-white text-gray-900'>
         <main className="px-5 py-4">
            <div className="">
               <h2 className="text-4xl font-bold">Consultation Medicale</h2>

               {/* Search Bar */}
               <div className='py-5'>
                  <SearchBar />
               </div>

               {/* Doctors List */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                  {currentDoctors.map(doctor => (
                     <div key={doctor.id} className="bg-white p-6 rounded-lg transition-transform transform hover:scale-105 border border-gray-200">
                        <div className="flex items-center space-x-4 mb-4">
                           <div className="relative">
                              <FaUserCircle
                                 size={40}
                              />
                           </div>
                           <div>
                              <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                              <p className="text-gray-600">{doctor.specialty}</p>
                           </div>
                        </div>
                        <p className="text-gray-700 mb-4">{doctor.description}</p>
                        <button className="bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Contact</button>
                     </div>
                  ))}
               </div>

               <div className="flex justify-between mt-8">
                  {currentPage > 0 && (
                     <button onClick={handleReturn} className="bg-gray-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        Return
                     </button>
                  )}
                  {(currentPage + 1) * itemsPerPage < doctors.length && (
                     <button onClick={handleLoadMore} className="bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Load More
                     </button>
                  )}
               </div>
               <Footer />
            </div>
         </main>
      </div>
   );
}
