import { IShapeImplementor } from "./ishape-implementor";

export default class SquareImplementor implements IShapeImplementor{
    drawImplementation(): void {
        console.log('**************');
        console.log('*            *');
        console.log('*            *');
        console.log('*            *');
        console.log('*            *');
        console.log('*            *');
        console.log('*            *');
        console.log('**************');
    }
}