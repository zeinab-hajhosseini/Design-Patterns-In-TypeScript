import { ISwitchCommand } from "./ISwitchCommand";
import { Light } from "./light";

export class SwitchOffCommand implements ISwitchCommand{

    #light: Light;
    
    constructor(light: Light){
        this.#light = light;
    }

    execute(): void {
        this.#light.turnOff();
    }
}