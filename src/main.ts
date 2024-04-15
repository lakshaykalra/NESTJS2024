import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  // app.useGlobalPipes(
  //   // TODO: Purpose of class-validator and class-transformer
  //   new ValidationPipe({
  //     whitelist: true,
  //   }),
  // );
  await app.listen(3000);
}

process.on('exit', (code) =>
  console.log(`Process is exiting with code ${code}`),
);
bootstrap();
