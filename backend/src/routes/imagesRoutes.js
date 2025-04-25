import { Router } from 'express';

const router = Router();

router.post('/images/upload', async (req, res) => {
  return res.json('upload image');
});

router.get('/images', async (req, res) => {
  return res.json('get all images');
});

router.get('/images/:id', async (req, res) => {
  const { id } = req.params;
  return res.json(`get one image ${id}`);
});

router.delete('/images/:id', async (req, res) => {
  const { id } = req.params;
  return res.json(`delete image ${id}`);
});

export default router;
