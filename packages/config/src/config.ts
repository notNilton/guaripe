export const config = {
  // API Configuration
  api: {
    url: process.env.API_URL || 'http://localhost:3333',
    port: parseInt(process.env.PORT || '3333', 10),
    prefix: process.env.API_PREFIX || 'api',
  },

  // Database Configuration
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    name: process.env.DB_NAME || 'valkyrie',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
  },

  // JWT Configuration
  jwt: {
    secret: process.env.JWT_SECRET || 'secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  },

  // Application Configuration
  app: {
    name: 'Project Valkyrie',
    environment: process.env.NODE_ENV || 'development',
    isDevelopment: process.env.NODE_ENV !== 'production',
    isProduction: process.env.NODE_ENV === 'production',
  },

  // CORS Configuration
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
  },
} as const;

export type Config = typeof config;
