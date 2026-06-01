import express from 'express';

const router = express.Router();

// 模拟用户数据
const users = [
  { id: 1, name: '张三', email: 'zhangsan@example.com' },
  { id: 2, name: '李四', email: 'lisi@example.com' },
  { id: 3, name: '王五', email: 'wangwu@example.com' }
];

// 获取所有用户
router.get('/', (req, res) => {
  res.json(users);
});

// 获取单个用户
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: '用户未找到' });
  }
});

export default router;