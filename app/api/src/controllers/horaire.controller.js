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
import HoraireModel from '../models/horaire.model.js';
import isValidInput from '../utils/isValidInput.js';
import client from "../client.js";


export default class HoraireController {

   static async create(req, res) {
      const {
         horaireTitle,
         heures
      } = req.body;
      try {
         if (!isValidInput(horaireTitle) || !isValidInput(heures)) {
            res.send('all fields are required!');
            return;
         }
         const horaire = await HoraireModel.create({
            data: {
               horaireTitle,
               heures
            }
         });
         if (!horaire) {
            res.send('Unable to create a schedule');
         }
         res.status(200).json({
            status: "created",
            message: "Registration successful",
            data: {
               horaireId: horaire.horaireId,
               horaireTitle: horaireTitle,
               heures: heures,
            }
         });
      } catch (error) {
         res.status(400).json({
            status: "Bad request",
            message: "Registration unsuccessful",
            statusCode: 400,
            error: error.message
         });
      } finally {
         await client.$disconnect();
      }

   }

   static async list(_, res) {
      /*
      ===================================================================================
      LIST ALL HORAIRES
      ===================================================================================
      */
      try {
         const allHoraires = await HoraireModel.findMany();
         if (!allHoraires) {
            res.send('cannot retrieve all schedules!');
            return;
         }
         res.status(200).json({
            status: "OK",
            message: 'retrieve all schedules succesfully',
            horaires: allHoraires,
         });
      } catch (error) {
         res.status(400).json({
            status: "Bad request",
            message: "failed to retrieve all users",
            statusCode: 400,
            error: error.message
         });
      } finally {
         await client.$disconnect();
      }
   }

   static async userById(req, res, next, userId) {
      /*
      ===================================================================================
      GET A SPECIFIC USER BY ID
      ===================================================================================
      */
      try {
         const user = await userSchema.findUnique({
            where: {
               userId: userId
            }
         });
         if (!user) {
            res.status(400).json('user not found!');
            return;
         }
         req.profile = user;
         next();
      } catch (error) {
         res.status(400).json({
            statusCode: 400,
            message: 'Could not retrieve user',
            error: error.message
         });
      } finally {
         await client.$disconnect();
      }
   }

   static read(req, res) {
      req.profile.role = null;
      req.profile.userPassword = null;
      res.send(req.profile);
   }

   static async update(req, res) {
      const { userName, userEmail, userPassword } = req.body;
      try {
         let user = req.profile;
         const id = user.userId;
         await userSchema.update({
            where: {
               userId: id
            },
            data: {
               userName: userName,
               userEmail: userEmail,
               userPassword: userPassword,
               // updated: Date.now().toLocaleString() how to handle date errors in my code
            }
         })
         user.userPassword = null;
         user.role = null;
         res.json(user);
      } catch (error) {
         res.status(400).json({
            status: 'Bad request',
            message: 'Failed to update user information',
            statusCode: 400,
            error: error.message
         });
      }
   }

   static async remove(req, res) {
      try {
         const { id } = req.params;
         await HoraireModel.delete({
            where: {
               horaireId: id
            }
         })
         res.send("Delete successfully");
      } catch (error) {
         res.status(400).json({
            statusCode: 400,
            message: 'Failed to delete!',
            error: error.message
         })
      }
   }
}