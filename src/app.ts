import { errorHandler } from './middlewares/error.js';
import submissionRouter from './routes/submissionRoutes.js';
import authRoutes from "./routes/authRoutes.js"
import bodyParser from 'body-parser'; 
import express from 'express';
import fileRoutes from './routes/fileRoutes.js';

const app = express();

app.use(bodyParser.json());
app.use('/api/submissions', submissionRouter);
app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes)

app.use(errorHandler)
export default app;