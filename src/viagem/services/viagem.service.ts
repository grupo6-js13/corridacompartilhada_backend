import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Viagem } from "../entities/viagem.entity";
import { ILike, Repository } from "typeorm";

@Injectable()
export class ViagemService {
    constructor(
        @InjectRepository(Viagem)
        private viagemRepository: Repository<Viagem>,
    ) {}

async findAll(): Promise<Viagem[]> {
        return await this.viagemRepository.find();
    }

    async findById(id: number): Promise<Viagem> {
        const viagem = await this.viagemRepository.findOne({ where: { id } });
        
        if (!viagem) {
            throw new HttpException('Viagem não encontrada!', HttpStatus.NOT_FOUND);
        }
        
        return viagem;
    }

    async findByOrigem(origem: string): Promise<Viagem[]> {
        return await this.viagemRepository.find({
            where: { origem: ILike(`%${origem}%`) }
        });
    }

    async create(viagem: Viagem): Promise<Viagem> {
        this.calcularTempoPreco(viagem); 
        return await this.viagemRepository.save(viagem);
    }

    async update(viagem: Viagem): Promise<Viagem> {
        await this.findById(viagem.id); 
        this.calcularTempoPreco(viagem); 
        return await this.viagemRepository.save(viagem);
    }

    async delete(id: number): Promise<any> {
        await this.findById(id);
        return await this.viagemRepository.delete(id);
    }

    // Calculos
    private calcularTempoPreco(viagem: Viagem): void {
        let velocidadeMedia = 0;
        const valorPorKm = 2.50; // Tarifa por km rodado
        const taxaBase = 5.00;   // Preco base 

        switch (viagem.periodo.toLowerCase()) {
            case 'manha':
            case 'noite':
                velocidadeMedia = 30; // Horário de rush
                break;
            case 'tarde':
                velocidadeMedia = 60; // Trânsito normal
                break;
            case 'madrugada':
                velocidadeMedia = 90; // Horario vazio
                break;
            default:
                throw new HttpException('Período inválido.', HttpStatus.BAD_REQUEST);
        }

        // Tempo estimado = distancia / velocidade
        const tempoMinutos = (viagem.distancia / velocidadeMedia) * 60;
        viagem.tempoEstimado = parseFloat(tempoMinutos.toFixed(0));

        // Preço total = taxa base + (distância * valor por km)
        const precoTotal = taxaBase + (viagem.distancia * valorPorKm);
        viagem.preco = parseFloat(precoTotal.toFixed(2));
    }

}
