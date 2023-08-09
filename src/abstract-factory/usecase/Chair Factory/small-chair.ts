import { Chair } from "./chair";

export class SmallChair extends Chair{
    constructor(){
        super();
        this.name = 'SmallChair';
        this.height = 40;
        this.width = 40;
        this.dipth = 40;
    }
}