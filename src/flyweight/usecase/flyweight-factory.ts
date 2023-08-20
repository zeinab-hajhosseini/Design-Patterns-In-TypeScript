import {FlyWeight} from './flyweight';

export class FlyWeightFactory{
    
    static flyweights: { [id: number]: FlyWeight } = {}

    static getFlyWeightCode(code: number): FlyWeight{
        if(!(code in FlyWeightFactory.flyweights)){
            FlyWeightFactory.flyweights[code] = new FlyWeight(code);
        }
        return FlyWeightFactory.flyweights[code];
    }

    static getCount(): number{
        return Object.keys(FlyWeightFactory.flyweights).length;
    }
}