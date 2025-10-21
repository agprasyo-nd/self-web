import { Router } from 'express';

const router = Router();

const sampleProjects = [
  { id: '1', title: 'Project One', description: 'First sample project' },
  { id: '2', title: 'Project Two', description: 'Second sample project' }
];

router.get('/', (req, res) => {
  res.json(sampleProjects);
});

router.get('/:id', (req, res) => {
  const p = sampleProjects.find(x => x.id === req.params.id);
  if (!p) return res.status(404).json({ error: 'Not found' });
  res.json(p);
});

export default router;
