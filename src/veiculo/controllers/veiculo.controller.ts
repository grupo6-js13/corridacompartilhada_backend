import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Veiculo } from "../entities/veiculo.entity";
import { VeiculoService } from "../services/veiculo.service";
import { DeleteResult } from "typeorm";

@Controller("/veiculos")
export class VeiculoController {

    constructor(
        private readonly veiculoService: VeiculoService
    ) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Veiculo[]> {
        return this.veiculoService.findAll()
    }

    @Get("/modelo/:modelo")
    @HttpCode(HttpStatus.OK)
    findAllByModelo(@Param("modelo") modelo: string): Promise<Veiculo[]> {
        return this.veiculoService.findAllByModelo(modelo);
    }

    @Get("/cor/:cor")
    @HttpCode(HttpStatus.OK)
    findAllByCor(@Param("cor") cor: string): Promise<Veiculo[]> {
        return this.veiculoService.findAllByCor(cor);
    }

    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param("id", ParseIntPipe) id: number): Promise<Veiculo> {
        return this.veiculoService.findById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() veiculo: Veiculo): Promise<Veiculo> {
        return this.veiculoService.create(veiculo);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() veiculo: Veiculo): Promise<Veiculo> {
        return this.veiculoService.update(veiculo);
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param("id", ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.veiculoService.delete(id);
    }
}