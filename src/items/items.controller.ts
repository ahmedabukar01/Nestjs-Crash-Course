import { 
    Controller, 
    Get, 
    Post, 
    Put, 
    Delete, 
    Body, 
    Req, 
    Res, 
    Param} from '@nestjs/common';
import { CreateDtoItem } from './Dto/create.item.dto';
import {Request, Response} from 'express'
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemServices: ItemsService){}

    @Get()
    findAll(){
        return this.itemServices.findAll();
    }

    // using req and res opject in express but not the best way to use nest js.


    // @Get()
    // findAll(@Req() req: Request, @Res() res: Response): Response{
    //     console.log(req.url);
    //     return res.send('Hello World')
    // }

    // you can destructure the param or not

    // @Get(':id')
    // findOne(@Param() test): string{
    //     return `item: ${test.id}`
    // }

    @Get(':id')
    findOne(@Param('id') id): string{
        return `item: ${id}`
    }

    @Post()
    create(@Body() createItems: CreateDtoItem): string {
        return `Name: ${createItems.name} Desc: ${createItems.description} Qty: ${createItems.qty}`;
    }

    @Put(':id')
    updateItem(@Body() updateItemDto: CreateDtoItem, @Param('id') id): string{
        return `ID: ${id}, Name: ${updateItemDto.name}`
    }
    @Delete(':id')
    delete(@Param('id') id): string{
        return `Deleted Id: ${id}`
    }
}
