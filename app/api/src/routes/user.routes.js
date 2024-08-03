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
import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import AuthController from "../controllers/auth.controller.js";


const router = Router();

router.route('/api/users')
   .get(UserController.list)
   .post(UserController.create);

router.route('/api/users/:userId')
   .get([AuthController.requireSignin, UserController.read])
   .put([AuthController.requireSignin, AuthController.hasAuthorization, UserController.update])
   .delete([AuthController.requireSignin, AuthController.hasAuthorization, UserController.remove]);

router.param('userId', UserController.userById);

export default router;