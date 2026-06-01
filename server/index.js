import express from 'express';
import cors from 'cors';
import usersRouter from './routes/users.js';

const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// 路由
app.use('/api/users', usersRouter);

// 根路由
app.get('/', (req, res) => {
  res.json({ message: '欢迎使用全栈应用 API' });
});

// 为 Vercel Serverless 环境导出 handler
export default app;