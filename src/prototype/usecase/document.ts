import {IPrototype} from './iprototype'

export class Document implements IPrototype{
    name: string;
    array: [number[], number[]];

    constructor(name: string, array: [number[], number[]]){
        this.name = name;
        this.array = array;
    }

    clone(mode: number): Document {
        let array;

        //Shallow Copy
        if(mode == 2){
            array = Object.assign([], this.array);
        }
        else{
            array = JSON.parse(JSON.stringify(this.array));
        }

        return new Document(this.name, array);
    }
}