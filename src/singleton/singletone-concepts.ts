// A Singleton Class
export class Singleton{
    static instance: Singleton;
    id: number;

    constructor(id: number){
        this.id = id;

        if(Singleton.instance){
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}

//Client Section
// All uses of the singleton point to the same original object

const Object1 = new Singleton(1);
const Object2 = new Singleton(2);

console.log(Object1 == Object2);
console.log(Object1.id);
console.log(Object2.id);



