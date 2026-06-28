# Auto Parts Site

这是一个基于 Next.js + TypeScript + Tailwind + Prisma（SQLite）的汽车配件电商 MVP 脚手架。

快速开始：

1. 安装依赖

   npm install

2. 运行数据库迁移并种子数据（会创建本地 SQLite）

   npx prisma migrate dev --name init
   npm run prisma:seed

3. 启动开发服务器

   npm run dev

说明：
- 数据库：prisma/schema.prisma 使用 SQLite（dev）。生产请改用 Postgres 并设置环境变量。
- Stripe / Auth 相关代码将在后续任务中添加。

如需我直接把仓库连接到 Vercel 并配置部署，我也可以帮你。