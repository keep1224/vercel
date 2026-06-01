import express from 'express';
import cors from 'cors';
import usersRouter from './routes/users.js';
import apiRouter from './api/index.js';

const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// 路由
app.use('/api/users', usersRouter);
app.use('/', apiRouter);

// 为 Vercel Serverless 环境导出 handler
export default app;