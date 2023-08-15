interface IPrototype{
    //interface with Clone method
    clone(): this;
}

//A Concrate Class
class MyClass implements IPrototype {

    field: number[];

    constructor(field: number[]){
        this.field = field;
    }

    clone(): this {
        //Shallow Copy
        // return Object.assign({}, this);
        
        //Deep Copy
        return JSON.parse(JSON.stringify(this));
    }
}

//Client

const Object1 = new MyClass([1,2,3,4]);
console.log("Object 1:", JSON.stringify(Object1));

const Object2 = Object1.clone();
console.log("Object 2:", JSON.stringify(Object2));

Object2.field[1] = 200;

console.log("Object 1:", JSON.stringify(Object1));
console.log("Object 1:", JSON.stringify(Object2));
