import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { ViagemModule } from './viagem/viagem.module';
import { Viagem } from './viagem/entities/viagem.entity';
import { VeiculoModule } from './veiculo/veiculo.module';
import { Veiculo } from './veiculo/entities/veiculo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'db_corridacompartilhada',
      entities: [Viagem, Veiculo, Usuario],
      synchronize: true,
      logging: false,
    }),
    UsuarioModule,
    AuthModule,
    ViagemModule,
    VeiculoModule 
    
],
  controllers: [],
  providers: [],
})
export class AppModule { }
