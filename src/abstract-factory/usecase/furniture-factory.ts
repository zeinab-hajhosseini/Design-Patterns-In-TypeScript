import { IChair } from "./Chair Factory/chair";
import { ChairFactory } from "./Chair Factory/chair-factory";
import { ITable } from "./Table Factory/table";
import { TableFactory } from "./Table Factory/table-factory";

interface IFurniture extends ITable, IChair{}

export class FurnitureFactory{
    static getFurniture(furniture: string): IFurniture | undefined{
        try{
              if(['BigChair', 'MediumChair', 'SmallChair'].indexOf(furniture) > -1){
            return ChairFactory.getChair(furniture);
            }
            if(['BigTable', 'MediumTable', 'SmallTable'].indexOf(furniture) > -1){
                return TableFactory.getTable(furniture);
            }
            throw new Error('Factory Not Found');
        }
        catch(e){
            console.log(e);
        }
    }
}
