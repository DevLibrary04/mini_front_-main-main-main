// import { Application, Request, Response, NextFunction } from 'express';
// import { createProxyMiddleware, Options } from 'http-proxy-middleware';

// export default function(app: Application) {
//   // 백엔드 API 프록시
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://10.125.121.190:8081',
//       changeOrigin: true,
//       secure: false,
//     } as Options)
//   );

//   // 네이버 Open API 프록시
//   app.use(
//     '/v1/search',
//     createProxyMiddleware({
//       target: 'https://openapi.naver.com',
//       changeOrigin: true,
//       secure: true,
//       pathRewrite: {
//         '^/v1/search': '/v1/search',
//       },
//     } as Options)
//   );
// }
