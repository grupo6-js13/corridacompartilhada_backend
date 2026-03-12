import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViagemModule } from './viagem/viagem.module';
import { Viagem } from './viagem/entities/viagem.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_corridacompartilhada',
      entities: [Viagem],
      synchronize: false,
      logging: false,
    }),
    ViagemModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
