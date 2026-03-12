import { Transform, TransformFnParams } from "class-transformer";
import { IsIn, IsNotEmpty, IsNumber, Length, Min } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tb_viagens" })
export class Viagem {

    @PrimaryGeneratedColumn()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty({ message: 'A origem é obrigatória' })
    @Length(3, 100, { message: 'A origem deve ter entre 3 e 100 caracteres' })
    @Column({ length: 100, nullable: false })
    origem: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty({ message: 'O Destino é obrigatório' })
    @Length(3, 100, { message: 'O Destino deve ter entre 3 e 100 caracteres' })
    @Column({ length: 100, nullable: false })
    destino: string;

    @IsNumber()
    @Min(0.1, { message: 'A distância deve ser maior que zero' })
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    distancia: number;

    @Transform(({ value }: TransformFnParams) => value?.trim().toLowerCase())
    @IsNotEmpty({ message: 'O período é obrigatório' })
    @IsIn(['manha', 'tarde', 'noite', 'madrugada'], {
        message: 'O período deve ser: manha, tarde, noite ou madrugada'
    })
    @Column({ length: 20, nullable: false })
    periodo: string;

    @IsNumber()
    @Min(1, { message: 'A viagem deve ter pelo menos 1 vaga' })
    @Column({ type: 'int', nullable: false })
    vagasDisponiveis: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    preco: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    tempoEstimado: number;
}