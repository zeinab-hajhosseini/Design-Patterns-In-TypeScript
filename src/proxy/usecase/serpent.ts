import IProteus from "./iproteus";
import { Leopard } from "./leopard";
import { Lion } from "./lion";

export class Serpent implements IProteus{

    name = 'Serpent';

    TellMeFuture(): void {
        if(Math.floor(Math.random() * 2)){
            Object.assign(this, new Lion());
            this.TellMeForm = Lion.prototype.TellMeForm;
            this.TellMeFuture = Lion.prototype.TellMeFuture;
        }
        else{
            Object.assign(this, new Leopard());
            this.TellMeForm = Leopard.prototype.TellMeForm;
            this.TellMeFuture = Leopard.prototype.TellMeFuture;
        }
    }

    TellMeForm(): void {
        console.log(`I'm From ${this.name}`);
    }
}