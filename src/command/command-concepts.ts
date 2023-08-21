// The Command Pattern Concept

interface ICommand{
    execute(): void;
}

class Invoker{
    #commands: {[id: string]: ICommand};

    constructor(){
        this.#commands = {};
    }

    register(command_name: string, command: ICommand){
        this.#commands[command_name] = command;
    }

    execute(command_name: string){
        if(command_name in this.#commands){
            this.#commands[command_name].execute();
        }
        else{
            console.log('This Command Not Register');
        }
    }
}

// The Receiver
class Receiver{
    command1(){
        console.log('Run Command 1');
    }

    command2(){
        console.log('Run Command 2');
    }
}

class Command1 implements ICommand{
    #receiver: Receiver;

    constructor(receiver: Receiver){
        this.#receiver = receiver;
    }

    execute(): void {
       this.#receiver.command1();
    }
}

class Command2 implements ICommand{
    #receiver: Receiver;

    constructor(receiver: Receiver){
        this.#receiver = receiver;
    }

    execute(): void {
       this.#receiver.command2();
    }
}

const INVOKER = new Invoker();
const RECEIVER = new Receiver();




INVOKER.register("command 1", new Command1(RECEIVER));
INVOKER.register("command 2", new Command2(RECEIVER));

INVOKER.execute("command 1");
INVOKER.execute("command 2");