import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00'; // Fuso horário de Brasília

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors(); // Essencial para o React conseguir consumir a API

  // Usa a porta do Render ou a 4000 localmente
  await app.listen(process.env.PORT ?? 4000); 
}
bootstrap();