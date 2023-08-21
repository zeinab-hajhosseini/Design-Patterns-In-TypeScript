import IProteus from "./iproteus";
import { Lion } from "./lion";
import { Serpent } from "./serpent";

export class Leopard implements IProteus{

    name = 'Leopard';

    TellMeFuture(): void {
        if(Math.floor(Math.random() * 2)){
            Object.assign(this, new Lion());
            this.TellMeForm = Lion.prototype.TellMeForm;
            this.TellMeFuture = Lion.prototype.TellMeFuture;
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