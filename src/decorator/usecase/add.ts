import { IValue } from "./value";

class _add implements IValue{
    value: number;

    constructor(value1: IValue | number, value2: IValue | number){
        let left = Object.prototype.hasOwnProperty.call(value1,'value')?
        (value1 as IValue).value :
        (value1 as number);

        let right = Object.prototype.hasOwnProperty.call(value2,'value')?
        (value2 as IValue).value :
        (value2 as number);

        this.value = left + right;
    }

}

export default function Add(value1: IValue | number, value2: IValue | number): IValue{
    return new _add(value1, value2);
}