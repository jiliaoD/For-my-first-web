# 加藤惠主题静态站

一个基于 React + Vite 的单页静态站点，用春日、留白、渐变和轻量动效来表达加藤惠相关的印象整理。项目默认不接入官方角色图、剧照、封面、原作音乐或其他版权不清晰素材，页面体验主要依靠文字、抽象视觉层和通用氛围表达完成。

## 技术栈

- React 18
- Vite 6
- TypeScript
- Motion for React
- Embla Carousel
- Vitest + Testing Library

## 本地开发

安装依赖：

```bash
pnpm install
```

启动开发服务器：

```bash
pnpm dev
```

默认访问地址通常为 `http://localhost:5173`。

## 质量校验

运行测试：

```bash
pnpm test
```

运行 TypeScript 检查：

```bash
pnpm run check
```

构建生产产物：

```bash
pnpm run build
```

## 构建产物与静态部署

生产构建输出目录为：

```text
dist/
```

该目录可直接上传到 Nginx、对象存储静态托管或任意静态文件服务器。

本项目采用单页锚点结构，不依赖 `react-router-dom`。Vite `base` 已配置为 `./`，因此构建后的资源路径是相对路径，更适合直接部署到子目录或静态站点目录。

## Nginx 部署示例

将 `dist/` 上传到服务器目录，例如 `/var/www/kato-megumi-site`，然后使用类似配置：

```nginx
server {
    listen 80;
    server_name example.com;

    root /var/www/kato-megumi-site;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

如果部署在子路径下，例如 `https://example.com/kato/`，可以把 `dist/` 内容放到对应目录中，由于资源使用相对路径，通常不需要再额外改写前端路由。

## 素材策略

- 不默认打包任何官方角色图、剧照、封面。
- 不默认内置原作音乐、翻弹、Remix 或来源不明音频。
- 页面中的视觉氛围优先通过 CSS 渐变、玻璃层、纸面感、抽象形状和通用意象完成。

## 常用命令

```bash
pnpm dev
pnpm test
pnpm run check
pnpm run build
pnpm preview
```
