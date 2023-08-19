class SubSystemA{
    method(): string{
        return 'A';
    }
}

class SubSystemB{
    method(value: string): string{
        return value;
    }
}

class SubSystemC{
    method(value: {C: number[]}): {C: number[]}{
        return value;
    }
}

class Facade{
    SubSystemA(): string{
        return new SubSystemA().method();
    }

    SubSystemB(value: string): string{
        return new SubSystemB().method(value);
    } 

    SubSystemC(value: {C: number[]}): {C: number[]}{
        return new SubSystemC().method(value);
    }
}

//Without Using Facade Pattern
console.log(new SubSystemA().method());
console.log(new SubSystemB().method('Hello'));
console.log(new SubSystemC().method({C: [1, 2, 3]}));

//Using Facade Pattern (Hide Complexity from Client side)
console.log(new Facade().SubSystemA());
console.log(new Facade().SubSystemB('Hello'));
console.log(new Facade().SubSystemC({C: [1, 2, 3]}));