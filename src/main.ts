import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  const configService = app.get<ConfigService>(ConfigService);
  await app.listen(configService.get('application.port'), '0.0.0.0');
  console.log(`listening on port ${configService.get('application.port')}`);
}
bootstrap();
