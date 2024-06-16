import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from "@nestjs/common";
import { CreateCatDto, ListAllEntities, UpdateCatDto } from "./dto";
import { Response } from "express";

@Controller('cats')

export class CatsController {
    @Post()
    create(@Body() createCatDto: CreateCatDto){
        return `This action adds a new cat ${createCatDto}`
    }

    @Get()
    // findAll(@Query() query:ListAllEntities){
    //     return `This action returns all cats (limit: ${query.limit} items)`;
    // }


    // Library specific approach
    findALL(@Res({passthrough: true}) res:Response){
        res.status(HttpStatus.OK)
        return [
            {
                'name': 'Tom',
                'breed': 'Persian',
                'age': 2
            }
        ]
    }
    @Get(':id')
    findOne(@Param('id') id:string){
        return `This action returns a #${id} cat`
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() updateCatDto:UpdateCatDto){
        return {
            id,
            ...updateCatDto
        }
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return `This action removes a #${id} cat`
    }
}