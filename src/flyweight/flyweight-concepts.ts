interface IFlyWeight{
    code: number;
}

class FlyWeight implements IFlyWeight{
    code: number;

    constructor(code: number){
        this.code = code;
    }
}

class FlyWeightFactory{
    static flyWeights: {[id: number] : FlyWeight} = {};

    static getFlyWeight(code: number): FlyWeight{
        if(!(code in FlyWeightFactory.flyWeights)){
            FlyWeightFactory.flyWeights[code] = new FlyWeight(code);
        }
        return FlyWeightFactory.flyWeights[code];
    }

    static getCount(): number {
        return Object.keys(FlyWeightFactory.flyWeights).length;
    }
}

class AppContext{
    codes: number[] = [];

    constructor(codes: string){
        for (let i = 0; i < codes.length; i++) {
            this.codes.push(codes.charCodeAt(i))
        }
    }

    output(): string{
         let ret = '';
         
         this.codes.forEach(c =>{
             ret = ret + String.fromCharCode(FlyWeightFactory.getFlyWeight(c).code);
         })

         return ret;
    }
    
}

// The Client
const APP_CONTEXT = new AppContext('abracadabra');

// use flyweights in a context
console.log(APP_CONTEXT.output());

console.log(`abracadabra has ${'abracadabra'.length} letters`);
console.log(
    `FlyweightFactory has ${FlyWeightFactory.getCount()} flyweights`
);