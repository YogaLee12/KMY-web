
# 天穹编织社官网

天穹编织社官网是基于 NestJS 后端框架和 Tailwind CSS 前端样式构建的现代化网站，旨在为用户提供优质的技术展示与服务平台。

---

## 环境准备

### 1. 安装 Node.js

- 推荐使用 Node.js 版本：**v20.18.0**
- 官方下载地址：[https://nodejs.org/](https://nodejs.org/)

安装完成后，在终端执行：

```bash
node -v
# 应显示 v20.18.0

npm -v
# 推荐使用 npm 版本 10.9.3
````

### 2. 安装 NestJS CLI

NestJS 是项目的后端核心框架。建议全局安装 NestJS CLI：

```bash
npm install -g @nestjs/cli
```

确认安装：

```bash
nest -v
```

---

## 项目安装

1. 克隆项目代码：

```bash
git clone https://your-repo-url.git
cd your-project-folder
```

2. 安装依赖：

```bash
npm install
```

---

## Tailwind CSS 安装与配置

1. 安装 Tailwind CSS 及相关依赖：

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. 初始化 Tailwind CSS 配置：

```bash
npx tailwindcss init -p
```

该命令会生成：

* `tailwind.config.js`
* `postcss.config.js`

3. 在项目的入口 CSS 文件中添加 Tailwind 指令，如 `src/styles.css`：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. 确保构建工具正确处理 Tailwind（根据项目使用的打包工具，如 Webpack、Vite、NestJS 相关构建等配置）。

---

## 项目启动

* 开发环境启动：

```bash
npm run dev
```

* 浏览器访问：

```
http://localhost:3000
```

---

## 常见问题

* **找不到 `tailwindcss` 命令**

  通过 `npx tailwindcss` 运行 Tailwind 相关命令，避免全局命令未注册导致的问题。

* **npm 或 Node 版本不兼容**

  请确认 Node.js 版本为 `v20.18.0`，npm 版本为 `10.9.3`，版本过低或过高可能导致依赖安装失败或运行异常。

* **安装依赖失败**

  尝试删除 `node_modules` 文件夹和 `package-lock.json` 文件，重新执行 `npm install`。

---

## 贡献指南

欢迎贡献代码和建议！请遵循以下流程：

1. Fork 本仓库
2. 新建分支 `feature/你的功能名`
3. 提交代码并推送到你的 Fork
4. 提交 Pull Request 到主仓库

---

## 许可证

本项目采用 MIT 许可证，详情见 LICENSE 文件。

---

## 联系方式



---

## 致谢

感谢所有支持和贡献天穹编织社官网的朋友们！


