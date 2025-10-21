import express from 'express';
import http from 'http';
import cors from 'cors';
import projectsRouter from './routes/projects';
import contactRouter from './routes/contact';

const app = express();
const PORT = Number(process.env.PORT ?? 4000);

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

const server = http.createServer(app);
server.listen(PORT, '0.0.0.0', () => {
  const addr = server.address();
  if (addr && typeof addr === 'object') {
    console.log(`Server listening on ${addr.address}:${addr.port} (family=${addr.family})`);
  } else {
    console.log(`Server listening on ${PORT}`);
  }
});
