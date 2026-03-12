import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Veiculo } from "../entities/veiculo.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class VeiculoService {

    constructor(
        @InjectRepository(Veiculo)
        private veiculoRepository: Repository<Veiculo>
    ) { }


    async findAll(): Promise<Veiculo[]> {
        return this.veiculoRepository.find({
        });
    }

    async findById(id: number): Promise<Veiculo> {

        const veiculo = await this.veiculoRepository.findOne({
            where: {
                id
            }
        });
        if (!veiculo) {
            throw new HttpException("Veículo não encontrado!", HttpStatus.NOT_FOUND)
        }
        return veiculo;
    }

    async findAllByModelo(modelo: string): Promise<Veiculo[]> {
        return this.veiculoRepository.find({
            where: {
                modelo: ILike(`%${modelo}%`)
            }
        })
    }

    async findAllByCor(cor: string): Promise<Veiculo[]> {
        return this.veiculoRepository.find({
            where: {
                cor: ILike(`%${cor}%`)
            }
        })
    }

    async create(veiculo: Veiculo): Promise<Veiculo> {

        return await this.veiculoRepository.save(veiculo);
    }

    async update(veiculo: Veiculo): Promise<Veiculo> {

        if (!veiculo.id || veiculo.id <= 0) {
            throw new HttpException("O ID do Veiculo é inválido!", HttpStatus.BAD_REQUEST);
        }

        await this.findById(veiculo.id);

        return await this.veiculoRepository.save(veiculo);
    }


    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);

        return await this.veiculoRepository.delete(id);
    }

}