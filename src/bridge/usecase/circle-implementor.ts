import { IShapeImplementor } from "./ishape-implementor";

export default class CircleImplementor implements IShapeImplementor{
    drawImplementation(): void {
        console.log('    ******');
        console.log('  **      **');
        console.log(' *          *');
        console.log('*            *');
        console.log('*            *');
        console.log(' *          *');
        console.log('  **      **');
        console.log('    ******'); 
    }
}