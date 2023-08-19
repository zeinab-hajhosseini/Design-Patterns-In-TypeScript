interface IAbstraction{
    method(value: string[]): void;
}

class RefinedAbstarctionA implements IAbstraction{
    #implementer: IImplementer;

    constructor(implementer: IImplementer){
        this.#implementer = implementer;
    }

    method(value: string[]): void {
        this.#implementer.method(value);
    }
}

class RefinedAbstarctionB implements IAbstraction{
    #implementer: IImplementer;

    constructor(implementer: IImplementer){
        this.#implementer = implementer;
    }

    method(value: string[]): void {
        this.#implementer.method(value);
    }
}

interface IImplementer{
    method(value: string[]): void;
}

class ConcrateImplementorA implements IImplementer{
    method(value: string[]): void {
        console.log(value);
    }
}

class ConcrateImplementerB implements IImplementer{
    method(value: string[]): void {
        value.forEach(v =>{
            console.log(v);
        });
    }
}

//Client Side
let A = new RefinedAbstarctionA(new ConcrateImplementorA());
A.method(['a', 'b', 'c']);

let B = new RefinedAbstarctionB(new ConcrateImplementerB());
B.method(['a', 'b', 'c']);