interface ISubject{
    //An Interface must be used by Proxy and Real Subject
    request(): void;
}

export class RealSubject implements ISubject{
    enormousDate: number[];

    constructor(){
        this.enormousDate = [1, 2, 3];
    }

    request(): number[] {
        return this.enormousDate;
    }
}

export class Proxy implements ISubject{

    enormousDate: number[];
    realSubject: RealSubject;

    constructor(){
        this.enormousDate = [];
        this.realSubject = new RealSubject();
    }

    request() {
        if(this.enormousDate.length == 0){
            console.log('Pulling Data from Real Subject');
            this.enormousDate = this.realSubject.request();
            return this.enormousDate;
        }
        console.log('Pulling Data from Proxy');
        return this.enormousDate;
        
    }
}

// The Client
const PROXY_SUBJECT = new Proxy();
// Use the Subject. First time it will load the enormous amounts of data
console.log(PROXY_SUBJECT.request());
// Use the Subject again, but this time it retrieves it from the local cache
console.log(PROXY_SUBJECT.request());

