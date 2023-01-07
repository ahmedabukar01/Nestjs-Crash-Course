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
import { Item } from './interfaces/items.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemServices: ItemsService){}

    @Get()
    async findAll(){
        return this.itemServices.findAll()
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
    async findOne(@Param('id') id): Promise<Item[]>{
        return this.itemServices.findOne(id)
    }

    @Post()
    async create(@Body() createItems: CreateDtoItem): Promise<Item> {
        return this.itemServices.createItem(createItems)
    }

    @Put(':id')
    updateItem(@Body() updateItemDto: CreateDtoItem, @Param('id') id): Promise<Item>{
        return this.itemServices.UpdateItem(id,updateItemDto)
    }
    @Delete(':id')
    delete(@Param('id') id): Promise<Item>{
        return this.itemServices.DeleteItem(id)
    }
}
