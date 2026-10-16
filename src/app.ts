import { errorHandler } from './middlewares/error.js';
import submissionRouter from './routes/submissionRoutes.js';
import bodyParser from 'body-parser'; 
import express from 'express';
import 'express-async-errors';

const app = express();

app.use(bodyParser.json());
app.use('/api/submissions', submissionRouter);

app.use(errorHandler)
export default app;