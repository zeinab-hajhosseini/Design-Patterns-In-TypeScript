//Factory A Sample Code
export interface IProductA {
    name: string;
}

class ConcrateProduct implements IProductA{
    name = '';
}

class ConcrateProductA extends ConcrateProduct{
    constructor(){
        super();
        this.name = "FactoryA: ProductA";
    }
}

class ConcrateProductB extends ConcrateProduct{
    constructor(){
        super();
        this.name = "FactoryA: ProductB";
    }
}

class ConcrateProductC extends ConcrateProduct{
    constructor(){
        super();
        this.name = "FactoryA: ProductC";
    }
}

export class FactoryA{
    static getObject(someProperty: string): IProductA{
        try{
            if(someProperty === 'a'){
                return new ConcrateProductA();
            }
            else if(someProperty === 'b'){
                return new ConcrateProductB();
            }
            else if(someProperty === 'c'){
                return new ConcrateProductC();
            }
        }
        catch(e){
            throw new Error('Class Not Found');
        }
        return new ConcrateProduct();
    }
}