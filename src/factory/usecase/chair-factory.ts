import { IChair } from "./chair";
import { BigChair } from "./big-chair";
import { MediumChair } from "./medium-chair";
import { SmallChair } from "./small-chair";

export class ChairFactory {
    static getChair (chair: string): IChair{
        if(chair == 'big'){
            return new BigChair();
        }
        else if(chair == 'medium'){
            return new MediumChair();
        }
        else{
            return new SmallChair();
        }
    }
}