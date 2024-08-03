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
import { FaLinkedin, FaWhatsapp, FaTelegram, FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-8 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            Contactez-nous :{' '}
            <a
              href="mailto:contact@dailyhealth.com"
              className="underline hover:text-gray-300 transition-colors duration-300 transform hover:scale-105"
            >
              contact@dailyhealth.com
            </a>
          </p>
          <p className="text-sm">
            Téléphone :{' '}
            <a
              href="tel:+243971760538"
              className="underline hover:text-gray-300 transition-colors duration-300 transform hover:scale-105"
            >
              +243971760538
            </a>
          </p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="/"
                className="text-white hover:text-gray-300 underline transition-colors duration-300 transform hover:scale-105"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-white hover:text-gray-300 underline transition-colors duration-300 transform hover:scale-105"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-white hover:text-gray-300 underline transition-colors duration-300 transform hover:scale-105"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-white hover:text-gray-300 underline transition-colors duration-300 transform hover:scale-105"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm">
            © 2024 Daily Health. Tous droits réservés.{' '}
            <a
              href="/privacy"
              className="underline hover:text-gray-300 transition-colors duration-300 transform hover:scale-105"
            >
              Politique de confidentialité
            </a>
          </p>
          <div className="flex justify-center md:justify-end mt-2 space-x-4">
            <a
              href="https://wa.me/numéro_de_téléphone"
              className="text-white hover:text-gray-300 transition-colors duration-300 transform hover:scale-125"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nom_utilisateur"
              className="text-white hover:text-gray-300 transition-colors duration-300 transform hover:scale-125"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:nom_utilisateur@gmail.com"
              className="text-white hover:text-gray-300 transition-colors duration-300 transform hover:scale-125"
            >
              <SiGmail size={20} />
            </a>
            <a
              href="https://t.me/nom_utilisateur"
              className="text-white hover:text-gray-300 transition-colors duration-300 transform hover:scale-125"
            >
              <FaTelegram size={20} />
            </a>
            <a
              href="https://twitter.com/nom_utilisateur"
              className="text-white hover:text-gray-300 transition-colors duration-300 transform hover:scale-125"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
