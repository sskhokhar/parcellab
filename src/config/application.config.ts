import { registerAs } from '@nestjs/config';

export const applicationConfig = registerAs('application', () => {
  return {
    nodeEnv: process.env.NODE_ENV,
    appEnvironment: process.env.APP_ENVIRONMENT,
    port: +process.env.PORT,
    weatherApi: process.env.WEATHER_API,
  };
});
