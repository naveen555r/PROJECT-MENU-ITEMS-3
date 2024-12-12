import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import menuRoutes from './routes/MenuRoutes.js';
import MenuItemRoutes from './routes/MenuItemRoutes.js'
import connectDB from './config/mongodb.js';
import 'dotenv/config'

const app = express();
app.use(cors());
app.use(bodyParser.json());

connectDB()

// Use Routes
app.use('/api', menuRoutes);
app.use('/api', MenuItemRoutes);

// Start Server
const port = process.env.PORT|| 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
