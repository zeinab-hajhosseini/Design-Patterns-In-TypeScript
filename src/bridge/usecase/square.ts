import { IShape } from "./ishape";
import { IShapeImplementor } from "./ishape-implementor";

export default class Square implements IShape{

    #implementor: IShapeImplementor;

    constructor(implementor: IShapeImplementor){
        this.#implementor = implementor;
    }

    draw(): void {
        this.#implementor.drawImplementation();        
    }
}