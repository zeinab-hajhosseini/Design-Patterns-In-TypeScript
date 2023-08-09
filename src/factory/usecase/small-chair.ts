import { Chair } from "./chair";

export class SmallChair extends Chair {
    constructor(){
        super();
        this.height = 20;
        this.width = 20;
        this.dipth = 20;
    }
}