import { Folder } from "./folder";

export interface IComponent{
    // A component interface describing the common
    // fields and methods of leaves and composites
    
    name: string;
    referenceToParent?: Folder;

    // A method each Leaf and composite container should implement
    dir(indent: string): void;

    // Called before a leaf is attached to a composite
    detach(): void;
}