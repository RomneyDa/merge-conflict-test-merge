export const config = {
  appName: "MyApp",
  version: "1.0.0",
  port: 3000,
  host: "localhost",
  timeout: 5000,
  retries: 3,
  logLevel: "info",
  cache: {
    enabled: false,
    ttl: 60,
    maxSize: 100,
  },
  security: {
    cors: true,
    helmet: false,
    rateLimit: {
      enabled: false,
      maxRequests: 100,
      windowMs: 60000,
    },
  },
  database: {
    host: "localhost",
    port: 5432,
    name: "myapp",
    pool: {
      min: 2,
      max: 10,
      idleTimeout: 30000,
    },
  },
};
// v7
