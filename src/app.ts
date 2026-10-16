import submissionRouter from './routes/submissionRoutes.js';
import bodyParser from 'body-parser'; 
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use('/api/submissions', submissionRouter);

export default app;