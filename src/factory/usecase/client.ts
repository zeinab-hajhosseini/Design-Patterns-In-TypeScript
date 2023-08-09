// Factory Use Case Example Code

import { ChairFactory } from "./chair-factory";

const chair = ChairFactory.getChair('medium');
console.log(chair.getDimension());