import { Module } from "@nestjs/common";
import { Veiculo } from "./entities/veiculo.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VeiculoController } from "./controllers/veiculo.controller";
import { VeiculoService } from "./services/veiculo.service";

@Module({
    imports: [TypeOrmModule.forFeature([Veiculo])],
    controllers: [VeiculoController],
    providers: [VeiculoService],
    exports: [],
})
export class VeiculoModule { }