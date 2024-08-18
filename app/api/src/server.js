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
import express from 'express';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import notFound from './controllers/notfound.controller.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import doctorRouter from './routes/doctor.routes.js';
import horaireRouter from './routes/horaire.routes.js';
// import client from './client.js';
// import multer from 'multer';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(compress());
app.use(cors());
app.use(helmet());
app.use('/', authRouter);
app.use('/', userRouter);
app.use('/', doctorRouter);
app.use('/', horaireRouter);
app.get('*', notFound);

// upload image to the db

// app.post('/upload', upload.single('image'), async (req, res) => {
//   try {
//     const { originalname, mimetype, size, buffer } = req.file;

//     const image = await client.image.create({
//       data: {
//         filename: originalname,
//         mimetype,
//         size,
//         data: buffer,
//       },
//     });

//     res.status(201).json(image);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to upload image' });
//   }
// });

// app.get('/images/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const image = await prisma.image.findUnique({
//       where: { id: id },
//     });

//     if (!image) {
//       return res.status(404).json({ error: 'Image not found' });
//     }

//     res.set('Content-Type', image.mimetype);
//     res.send(image.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to retrieve image' });
//   }
// });

export default app;