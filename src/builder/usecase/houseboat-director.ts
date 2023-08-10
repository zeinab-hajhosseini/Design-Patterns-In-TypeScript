import { House } from "./house";
import { HouseBuilder } from "./house-builder";

export class HouseBoatDirector{
    static construct(): House{
        return new HouseBuilder()
        .setBuildingType('House Boat')
        .setWallMaterials('Wood')
        .setDoors(2)
        .setWindows(5)
        .getResult();
    }
}