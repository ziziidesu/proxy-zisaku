const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// プロキシ設定
app.use('/', createProxyMiddleware({
  target: 'https://blogbooks.net', // プロキシしたいURLを指定
  changeOrigin: true,
}));

// ポート指定
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});

