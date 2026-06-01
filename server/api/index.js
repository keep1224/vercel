import express from 'express';

const router = express.Router();

// 处理所有非 API 请求，返回 index.html
router.get('*', (req, res) => {
  res.sendFile('index.html', { root: '.' });
});

export default router;