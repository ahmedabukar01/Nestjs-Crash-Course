import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose'

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

    async findAll(): Promise<Item[]>{
        return await this.itemModel.find();
    }

    async findOne(id: string): Promise<Item[]>{
        return await this.itemModel.findOne({_id: id})
    }

    async createItem(item: Item): Promise<Item>{
        // const newItem = new this.itemModel(item);
        // return await newItem.save()
        return await this.itemModel.create(item)
    }
    async UpdateItem(id: string, item: Item): Promise<Item>{
        return await this.itemModel.findByIdAndUpdate(id, item,{new: true})
    }
    async DeleteItem(id: string): Promise<Item>{
        return await this.itemModel.findByIdAndDelete({_id: id})
    }

}
