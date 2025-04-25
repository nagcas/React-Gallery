import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.json({
    message: 'Welcome to api 1.0.0',
  })
});

export default router;
