// Abstract Factory Use Case Example Code

import { FurnitureFactory } from "./furniture-factory";

let furniture = FurnitureFactory.getFurniture('MediumChair');
console.log(furniture?.name);
console.log(furniture?.getDimension());

furniture = FurnitureFactory.getFurniture('MediumTable');
console.log(furniture?.name);
console.log(furniture?.getDimension());