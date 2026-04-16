import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { ViagemModule } from './viagem/viagem.module';
import { VeiculoModule } from './veiculo/veiculo.module';
import { ProdService } from './data/services/prod.service';
import { DevService } from './data/services/dev.service';

@Module({
  imports: [
    // Carrega as variáveis de ambiente
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // Escolhe o banco de dados dinamicamente
    TypeOrmModule.forRootAsync({
      useClass: process.env.NODE_ENV === 'production' ? ProdService : DevService,
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