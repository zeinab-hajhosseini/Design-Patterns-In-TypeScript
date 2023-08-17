interface IComponent{
    method(): string;
}

class Component implements IComponent{
    method(): string {
        return 'Component Method';
    }
}

class Decorator implements IComponent{
    #object: Component;

    constructor(object: Component){
        this.#object = object;
    }

    method(): string {
        return `Decorator Method(${this.#object.method()})`;
    }
}

//Client Code

const COMPONENT = new Component();
console.log(COMPONENT.method());

const DECORATOR1 = new Decorator(COMPONENT);
console.log(DECORATOR1.method());

const DECORATOR2 = new Decorator(DECORATOR1);
console.log(DECORATOR2.method());

