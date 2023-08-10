import { House } from "./house";
import { HouseBuilder } from "./house-builder";

export class CastleDirector{
    static construct(): House{
        return new HouseBuilder()
        .setBuildingType('Castle')
        .setWallMaterials('Stone')
        .setDoors(50)
        .setWindows(200)
        .getResult();
    }
}