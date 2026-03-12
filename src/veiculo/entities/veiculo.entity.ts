import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsPositive, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tb_veiculos" })
export class Veiculo {

    @PrimaryGeneratedColumn() // PRIMARY KEY (id) AUTOINCREMENT;
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty({ message: "O Modelo do Veículo é Obrigatório" })
    @Length(2, 100, { message: "O Modelo do Veículo deve ter entre 2 e 100 caracteres" })
    @Column({ length: 100, nullable: false })
    modelo: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty({ message: "A Placa do Veículo é Obrigatória" })
    @Length(7, 7, { message: "A Placa do Veículo deve ter 7 caracteres" })
    @Column({ length: 7, nullable: false, unique: true })
    placa: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty({ message: "A Cor Veículo é Obrigatória" })
    @Length(2, 30, { message: "A Cor do Veículo deve ter entre 2 e 30 caracteres" })
    @Column({ length: 30, nullable: false})
    cor: string;

    @IsPositive({ message: "Informe a Capacidade Máxima do Veículo" })
    @Column({ nullable: false })
    capacidadeMaxima: number;
}