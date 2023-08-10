import { House } from "./house";
import { HouseBuilder } from "./house-builder";

export class IglooDirector{
    static construct(): House{
        return new HouseBuilder()
        .setBuildingType('Igloo')
        .setWallMaterials('Ice')
        .setDoors(1)
        .getResult();
    }
}