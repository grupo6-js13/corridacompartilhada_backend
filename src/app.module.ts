import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViagemModule } from './viagem/viagem.module';
import { Viagem } from './viagem/entities/viagem.entity';
import { VeiculoModule } from './veiculo/veiculo.module';
import { Veiculo } from './veiculo/entities/veiculo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_corridacompartilhada',
      entities: [Viagem, Veiculo],
      synchronize: false,
      logging: false,
    }),
    ViagemModule,
    VeiculoModule    
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
