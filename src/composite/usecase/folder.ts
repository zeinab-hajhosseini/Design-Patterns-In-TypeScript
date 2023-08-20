import { IComponent } from "./icomponent";

export class Folder implements IComponent{
    name: string;
    referenceToParent?: Folder;
    components: IComponent[];

    constructor(name: string){
        this.name = name;
        this.components = [];
    }

    dir(indent: string): void {
        console.log(`${indent}<DIR>  ${this.name}`);

        this.components.forEach(component => {
            component.dir(indent + '..');
        })
        
    }

    // Detaching this composite from its parent composite
    detach(): void {
        if(this.referenceToParent){
            this.referenceToParent.delete(this);
            this.referenceToParent = undefined;
        }
    }

    // Detach leaf / composite from any current parent reference and
    // then set the parent reference to this composite
    attach(component: IComponent): void{
        component.detach();
        component.referenceToParent = this;
        this.components.push(component);
    }

    // Removes leaf/composite from this composite this.components
    delete(component: IComponent): void{
        let index = this.components.indexOf(component);

        if(index > -1){
            this.components.splice(index, 1)
        }
    }

}