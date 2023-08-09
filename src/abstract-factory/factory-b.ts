//Factory B Sample Code
export interface IProductB {
    name: string;
}

class ConcrateProduct implements IProductB{
    name = '';
}

class ConcrateProductA extends ConcrateProduct{
    constructor(){
        super();
        this.name = "FactoryB: ProductA";
    }
}

class ConcrateProductB extends ConcrateProduct{
    constructor(){
        super();
        this.name = "FactoryB: ProductB";
    }
}

class ConcrateProductC extends ConcrateProduct{
    constructor(){
        super();
        this.name = "FactoryB: ProductC";
    }
}

export class FactoryB{
    static getObject(someProperty: string): IProductB{
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