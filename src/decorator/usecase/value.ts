export interface IValue{
    value: number;
}

class _value implements IValue{
    value: number;

    constructor(value: number){
        this.value = value;
    }
}

export default function value(value: number): IValue{
    return new _value(value);
}