import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Viagem } from "../../viagem/entities/viagem.entity";
import { Veiculo } from "../../veiculo/entities/veiculo.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Injectable()
export class ProdService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            url: process.env.DATABASE_URL, // O Render vai injetar a URL do banco aqui
            entities: [Viagem, Veiculo, Usuario],
            synchronize: true, // Recria as tabelas no Postgres vazio do Render
            logging: false,
            ssl: {
                rejectUnauthorized: false, // Necessário para conexões seguras em nuvem
            },
        };
    }
}