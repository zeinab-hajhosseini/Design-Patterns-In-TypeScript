import { IShape } from "./ishape";
import { IShapeImplementor } from "./ishape-implementor";

export default class Circle implements IShape{

    #implementor: IShapeImplementor;

    constructor(implementor: IShapeImplementor){
        this.#implementor = implementor;
    }

    draw(): void {
        this.#implementor.drawImplementation();        
    }
}