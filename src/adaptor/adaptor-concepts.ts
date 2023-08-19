interface IA{
    methodA(): void;
}

class ClassA implements IA{
    methodA(): void {
        console.log("Method A");
    }
}

interface IB{
    methodB(): void;
}

class ClassB implements IB{
    methodB(): void {
        console.log("Method B");
    }
}

class AdaptedClassB implements IA{
    #classB: ClassB;

    constructor(){
        this.#classB = new ClassB();
    }

    methodA(): void {
        this.#classB.methodB();
    }
}

//Before Using Adpator Pattern
const items = [new ClassA(), new ClassB()];
items.forEach(element =>{
    if(element instanceof ClassA){
        element.methodA();
    }
    else{
        element.methodB();
    }
})

// After creating an adapter for ClassB I can reuse the same method

const Adapted = [new ClassA(), new AdaptedClassB()];
Adapted.forEach(element =>{
    element.methodA();
})