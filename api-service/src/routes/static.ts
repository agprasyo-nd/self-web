import { Router } from 'express';
import siteData from '../data/siteData';

const router = Router();

router.get('/menu', (req, res) => res.json(siteData.menu));
router.get('/home', (req, res) => res.json(siteData.home));
router.get('/about', (req, res) => res.json(siteData.about));
router.get('/resume', (req, res) => res.json(siteData.resume));
router.get('/portfolio', (req, res) => res.json(siteData.portfolio));

export default router;
