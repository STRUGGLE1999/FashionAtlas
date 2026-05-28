# Git 远端仓库配置说明

当前本地仓库状态：

- 项目路径：`/Users/work/code/VSCode/FashionAtlas`
- 当前分支：`main`
- 本地仓库：已初始化
- 远端仓库：待配置

## 1. 在 GitHub 新建空仓库

建议仓库名：

```text
FashionAtlas
```

新建仓库时不要勾选：

- Add a README file
- Add .gitignore
- Choose a license

因为这些文件本地项目已经有了。

## 2. 配置远端地址

进入项目目录：

```bash
cd /Users/work/code/VSCode/FashionAtlas
```

如果使用 HTTPS：

```bash
git remote add origin https://github.com/YOUR_NAME/FashionAtlas.git
```

如果使用 SSH：

```bash
git remote add origin git@github.com:YOUR_NAME/FashionAtlas.git
```

检查远端是否配置成功：

```bash
git remote -v
```

## 3. 推送 main 分支

```bash
git push -u origin main
```

如果提示需要登录，按 GitHub 终端提示完成认证。

## 4. 推送后部署

推送成功后，可在 Vercel 或 Netlify 导入该 GitHub 仓库。

推荐配置：

- Build command：`npm run check`
- Publish directory：`.`
- Environment variables：
  - `OPENAI_API_KEY`
  - `OPENAI_MODEL`，可选，默认 `gpt-5-mini`

部署成功后运行：

```bash
DEPLOY_URL=https://your-site.example npm run deploy:verify
```

## 常见问题

如果远端地址写错：

```bash
git remote set-url origin https://github.com/YOUR_NAME/FashionAtlas.git
```

如果想查看最近提交：

```bash
git log --oneline -3
```

如果想确认没有未提交文件：

```bash
git status --short
```
