import { Router } from 'express';
import { contactSchema } from '../lib/validators';

const router = Router();

router.post('/', (req, res) => {
  try {
    const data = contactSchema.parse(req.body);
    // Here you would enqueue email or save to DB. We'll just echo.
    res.json({ ok: true, data });
  } catch (err: any) {
    return res.status(400).json({ error: err.errors ?? err.message });
  }
});

export default router;
