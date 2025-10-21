import express from 'express';
import cors from 'cors';
import projectsRouter from './routes/projects';
import contactRouter from './routes/contact';

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => res.json({ service: 'self-web-api', version: '0.1.0' }));
app.use('/api/projects', projectsRouter);
app.use('/api/contact', contactRouter);

// Basic error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, '0.0.0.0', () => console.log(`API listening on http://localhost:${PORT}`));
