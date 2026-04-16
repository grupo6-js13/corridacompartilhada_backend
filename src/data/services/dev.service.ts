import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Viagem } from "../../viagem/entities/viagem.entity";
import { Veiculo } from "../../veiculo/entities/veiculo.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_corridacompartilhada',
            entities: [Viagem, Veiculo, Usuario],
            synchronize: true, // Cria as tabelas automaticamente no ambiente local
            logging: false,
        };
    }
}