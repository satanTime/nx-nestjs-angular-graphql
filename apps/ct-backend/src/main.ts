/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {join} from 'path';

import {Logger} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {config} from 'dotenv';
import * as helmet from 'helmet';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

async function bootstrap() {
  config();
  config({path: join(__dirname, '.env.default')});

  const app = await NestFactory.create(AppModule, {
    logger: ['debug'],
  });

  app.use(helmet());
  app.enableCors({
    origin: environment.origin,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap().catch(error => {
  Logger.error('Unexpected failure', error);
  process.exit(1);
});
