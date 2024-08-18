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
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import AuthLayout from './components/layouts/AuthLayout';
import LoginPage from './pages/LoginPage';
import Consultation from './pages/Consultation';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PharmacyLocator from './pages/PharmacyLocator';
import MedicationReminder from './pages/MedicationReminder';
import RegisterPage from './pages/RegisterPage';
import Settings from './pages/Settings';
import './css/index.css';
import Test from './components/ui/Test';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/pharmacylocator',
        element: <PharmacyLocator />
      },
      {
        path: '/medicationreminder',
        element: <MedicationReminder />
      },
      {
        path: 'consultation',
        element: <Consultation />
      },
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'contacts',
        element: <Contact />
      },
      {
        path: 'test',
        element: <Test />
      }
     
    ]
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <RegisterPage />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);