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

import userSchema from "../models/user.model.js";
import jwt from 'jsonwebtoken';
// import expressJwt from 'express-jwt'; // warning should work in the browser with this dependancy I must install it tomorrow
import mainConfig from '../config/config.js';
import { authenticate } from "../models/user.model.js";


export default class AuthController {
   static async signin(req, res) {
      const { userEmail, userPassword } = req.body;
      try {
         const user = await userSchema.findUnique({
            where: {
               userEmail: userEmail
            }
         });
         if (!user) {
            res.status(401).json({ error: 'User not found!' });
            return;
         }
         if (!await authenticate(userPassword, user.userPassword)) {
            res.status(401).json({
               error: "Email and Password don't match"
            });
            return;
         }
         const token = jwt.sign({ userId: user.userId }, mainConfig.jwtSecret);
         // const delaisExpirationCookie = new Date().getMilliseconds() + 9999999; I cannot extend times as I want
         res.cookie('accesstoken', token, { expires: new Date() });
         // console.log(token);
         res.status(200).json({
            statusCode: 200,
            message: 'Login sucessfully',
            data: {
               accessToken: token,
               userId: user.userId,
               userName: user.userName,
               userEmail: user.userEmail,
            }
         });
      } catch (error) {
         console.log(error.stack);
         return;
      }
   }

   static signout(_, res) {
      res.clearCookie('accesstoken');
      res.status(200).json({
         message: 'signed out!'
      });
   }

   static requireSignin(_, __, next) {
      console.log('require signin');
      next();
   }

   static hasAuthorization(_, __, next) {
      console.log('has authorization');
      next();
   }
}