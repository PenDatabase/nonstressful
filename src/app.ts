import submissionRouter from './routes/submissionRoutes.js';
import express from 'express';

const app = express();

app.use(express.json());
app.use('/api/submissions', submissionRouter);

export default app;