interface ICompositeComponent{
    // A component interface describing the common
    // fields and methods of leaves and composites

    name: string;   // A name for this component
    referenceToParent?: Composite;
    method(): void; // A method each Leaf and composite container should implement
    detach(): void  // Called before a leaf is attached to a composite
}

class Leaf implements ICompositeComponent{
    // A Leaf can be added to a composite, but not a leaf

    name: string;
    referenceToParent?: Composite = undefined;

    constructor(name: string){
        this.name = name;
    }

    method(): void {
        let parent = this.referenceToParent ? this.referenceToParent.name : 'none';
        console.log(`<Leaf>\t\tname:${this.name}\tParent:\t${parent}`);
    }

    detach(): void {
        if(this.referenceToParent){
            this.referenceToParent.delete(this);
        }
    }
}

class Composite implements ICompositeComponent{
    // A composite can contain leaves and composites

    name: string;
    referenceToParent?: Composite;
    components: ICompositeComponent[];
    
    constructor(name: string){
        this.name = name;
        this.components = [];
    }

    method(): void {
        let parent = this.referenceToParent ? this.referenceToParent.name : 'none';
        console.log(
            `<Composite>\tname:${this.name}\tParent:\t${parent}\tComponents:${this.components.length}`
        );

        this.components.forEach(component =>{
            component.method();
        })
    }

    attach(component: ICompositeComponent): void {
        // Detach leaf / composite from any current parent reference and
        // then set the parent reference to this composite
        component.detach();
        component.referenceToParent = this;
        this.components.push(component);
    }

    delete(component: ICompositeComponent): void {
        // Removes leaf/composite from this composite this.components
        const index = this.components.indexOf(component)
        if (index > -1) {
            this.components.splice(index, 1)
        }
    }

    detach(): void {
        // Detaching this composite from its parent composite
        this.referenceToParent?.delete(this);
        this.referenceToParent = undefined;
    }
}

//Client Side

const LEAF_A = new Leaf('leaf_a');
const LEAF_B = new Leaf('leaf_b');

const COMPOSITE_1 = new Composite('composite_1');
const COMPOSITE_2 = new Composite('composite_2');

// Attach LEAF_A to COMPOSITE_1
COMPOSITE_1.attach(LEAF_A)

// Instead, attach LEAF_A to COMPOSITE_2
COMPOSITE_2.attach(LEAF_A)

// Attach COMPOSITE1 to COMPOSITE_2
COMPOSITE_2.attach(COMPOSITE_1)

// Run the methods that
LEAF_B.method() // not in any composites
COMPOSITE_2.method() // COMPOSITE_2 contains both COMPOSITE_1 and LEAF_A