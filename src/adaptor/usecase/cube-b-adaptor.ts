import { ICubeA } from "./cube-a";
import { CubeB } from "./cube-b";

export class CubeBAdapor implements ICubeA{

    #cubeB: CubeB;

    constructor(){
        this.#cubeB = new CubeB();
    }

    manufactor(width: number, height: number, depth: number): boolean {
        return this.#cubeB.create(
            [0 - width / 2, 0 - height /2 , 0 - depth / 2],
            [0 + width / 2, 0 + height /2 , 0 + depth / 2]
        );
    }
}