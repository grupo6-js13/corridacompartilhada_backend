import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00';

  // Configurações do Swagger
  const config = new DocumentBuilder()
    .setTitle('API Corridas Compartilhadas')
    .setDescription('API REST do projeto de caronas universitárias da Orbyte(Grupo 6)')
    .setContact("Grupo 6 JS13", "https://github.com/grupo6js13", "")
    .setVersion('1.0')
    .addBearerAuth() 
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document); // Define a rota da documentação

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();