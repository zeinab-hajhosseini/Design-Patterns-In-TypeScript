import { House } from "./house";

interface IHouse{
    house: House;
    setBuildingType(buildingType: string): this;
    setWallMaterials(wallMaterials: string): this;
    setWindows(windows: number): this;
    setDoors(doors: number): this;
    getResult(): House;
}

export class HouseBuilder implements IHouse{
    house: House;

    constructor(){
        this.house = new House();
    }

    setBuildingType(buildingType: string): this {
        this.house.buildingType = buildingType;
        return this;
    }

    setWallMaterials(wallMaterials: string): this {
        this.house.wallMaterials = wallMaterials;
        return this;
    }

    setWindows(windows: number): this{
        this.house.windows = windows;
        return this;
    }

    setDoors(doors: number): this {
        this.house.doors = doors;
        return this;
    }

    getResult(): House {
        return this.house;
    }
}
