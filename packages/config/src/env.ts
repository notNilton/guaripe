export interface EnvironmentVariables {
  // API
  API_URL?: string;
  PORT?: string;
  API_PREFIX?: string;

  // Database
  DB_HOST?: string;
  DB_PORT?: string;
  DB_NAME?: string;
  DB_USER?: string;
  DB_PASSWORD?: string;

  // JWT
  JWT_SECRET?: string;
  JWT_EXPIRES_IN?: string;

  // Application
  NODE_ENV?: 'development' | 'production' | 'test';

  // CORS
  CORS_ORIGIN?: string;
}

export const validateEnv = (): void => {
  const requiredInProduction = ['JWT_SECRET'];

  if (process.env.NODE_ENV === 'production') {
    const missing = requiredInProduction.filter((key) => !process.env[key]);
    if (missing.length > 0) {
      throw new Error(`Missing required environment variables in production: ${missing.join(', ')}`);
    }
  }
};
