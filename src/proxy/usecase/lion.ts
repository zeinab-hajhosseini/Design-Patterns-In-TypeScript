import IProteus from "./iproteus";
import { Leopard } from "./leopard";
import { Serpent } from "./serpent";

export class Lion implements IProteus{

    name = 'Lion';

    TellMeFuture(): void {
        if(Math.floor(Math.random() * 2)){
            Object.assign(this, new Leopard());
            this.TellMeForm = Leopard.prototype.TellMeForm;
            this.TellMeFuture = Leopard.prototype.TellMeFuture;
        }
        else{
            Object.assign(this, new Serpent());
            this.TellMeForm = Serpent.prototype.TellMeForm;
            this.TellMeFuture = Serpent.prototype.TellMeFuture;
        }
    }

    TellMeForm(): void {
        console.log(`I'm From ${this.name}`);
    }
}