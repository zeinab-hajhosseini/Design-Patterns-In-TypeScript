import { Chair } from "./chair";

export class MediumChair extends Chair{
    constructor(){
        super();
        this.name = 'MediumChair';
        this.height = 60;
        this.width = 60;
        this.dipth = 60;
    }
}