import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.write('Hello, world!');
});

export default router;
