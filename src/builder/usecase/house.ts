export class House{
    doors = 0;
    windows = 0;
    wallMaterials = '';
    buildingType = '';

    construction(): string{
        return `This is a ${this.wallMaterials} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`
    }
}

