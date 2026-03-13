import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Exclude, Transform, TransformFnParams } from "class-transformer"
import { Viagem } from "../../viagem/entities/viagem.entity"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    id: number

    @Transform(({value}: TransformFnParams)=> value?.trim()) // remover espacos em branco - inicio e fim
    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    nome: string

    //email do usuario
    @Transform(({value}: TransformFnParams)=> value?.trim()) // remover espacos em branco - inicio e fim
    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    usuario: string

    @Transform(({value}: TransformFnParams)=> value?.trim()) // remover espacos em branco - inicio e fim
    @MinLength(8)
    @IsNotEmpty()
   // @Exclude()
    @Column({length: 255, nullable: false }) 
    senha: string

    @Column({length: 5000 }) 
    foto: string

    @Column({length: 255})
    campus: string

    @OneToMany(() => Viagem, (viagem) => viagem.usuario)
    viagem: Viagem[]

    
}