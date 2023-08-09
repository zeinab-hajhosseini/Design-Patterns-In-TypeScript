import { dimension } from "../dimension";

export interface IChair{
    name: string;
    height: number;
    width: number;
    dipth: number;
    getDimension(): dimension;
}

export class Chair implements IChair{
    name = '';
    height = 0;
    width = 0;
    dipth = 0;

    getDimension(): dimension{
        return {
            height: this.height,
            width: this.width,
            dipth: this.dipth
        }
    }
}