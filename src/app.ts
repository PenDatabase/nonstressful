import submissionRouter from './routes/submissionRoutes.js';
import express from 'express';

const app = express();

app.use(express.json());
app.use('/api/submissions', submissionRouter);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });

export default app;