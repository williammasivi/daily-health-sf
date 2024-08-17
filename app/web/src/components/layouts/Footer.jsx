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
import { FaWhatsapp, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-blue-700 py-8 bg-gradient-to-r text-blue-500 bg-white border-r border-gray-200 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-24">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold">daily-health</h3>
          <p className="text-sm mt-2">Révolutionner la gestion de la santé en ligne</p>
        </div>
        <div className="flex space-x-8">
          <a href="https://wa.me/tonnumero" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://t.me/tonnomutilisateur" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
            <FaTelegram size={24} />
          </a>
          <a href="mailto:tonemail@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-300">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
      <div className="text-center mt-8 border-t text-blue-700 pt-4">
        <p className="text-sm">© 2024 daily-health. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
