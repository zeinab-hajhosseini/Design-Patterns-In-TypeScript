import { IChair } from "../../../factory/usecase/chair";
import { BigChair } from "./big-chair";
import { Chair } from "./chair";
import { MediumChair } from "./medium-chair";
import { SmallChair } from "./small-chair";

export class ChairFactory{
    static getChair(chair: string): IChair{
        if(chair == 'BigChair'){
            return new BigChair();
        }
        else if(chair == 'MediumChair'){
            return new MediumChair();
        }
        else  if(chair == 'SmallChair'){
            return new SmallChair();
        }

        return new Chair();
    }
}