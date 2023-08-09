import { dimension } from "../../../factory/usecase/dimension";

export interface ITable{
    name: string;
    height: number;
    width: number;
    dipth: number;
    getDimension(): dimension;
}

export class Table implements ITable{
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