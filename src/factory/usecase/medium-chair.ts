import { Chair } from "./chair";

export class MediumChair extends Chair {
    constructor(){
        super();
        this.height = 40;
        this.width = 40;
        this.dipth = 40;
    }
}