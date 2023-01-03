import { Injectable } from '@nestjs/common';
import { item } from './interfaces/items.interface';

@Injectable()
export class ItemsService {
    private readonly items: item[] = [
        {
            id: "232323232",
            name: "mohamed",
            qty: 33,
            description: "this is description"
        },
        {
            id: "45354365474",
            name: "Abdalla",
            qty: 23,
            description: "this is description"
        },
        {
            id: "46363654",
            name: "Omar",
            qty: 64,
            description: "this is description"
        }
    ];

    findAll(): item[]{
        return this.items;
    }
}
