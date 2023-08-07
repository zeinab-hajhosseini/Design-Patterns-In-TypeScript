// Factory Concepts

interface IProduct {
    name: string;
} 

class ConcerateProduct implements IProduct {
    name = '';
}

class ConcerateProductA extends ConcerateProduct {
    constructor(){
        super();
        this.name = "ConcentrateProductA";
    }
    
}

class ConcerateProductB extends ConcerateProduct {
    constructor(){
        super();
        this.name = "ConcentrateProductB";
    }
}

class ConcerateProductC extends ConcerateProduct {
    constructor(){
        super();
        this.name= "ConcentrateProductC";
    }
}

class Creator {
    static cteateObject(type: string): IProduct{
        if(type == 'a'){
            return new ConcerateProductA();
        }
        else if(type == 'b'){
            return new ConcerateProductB();
        }
        else{
            return new ConcerateProductC();
        }
    }
}

// Client Concepts
const client = Creator.cteateObject('c');
console.log(client.name);