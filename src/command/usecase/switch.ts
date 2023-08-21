import { ISwitchCommand } from "./ISwitchCommand";


// An Invoker
export class Switch{
    #commands: {[id: string]: ISwitchCommand};
    #history: [number, string][];

    constructor(){
        this.#commands = {};
        this.#history = [];
    }

    register(command_name: string, command: ISwitchCommand){
        this.#commands[command_name] = command;
    }

    execute(command_name: string){
        if(command_name in this.#commands){
            this.#commands[command_name].execute();
            this.#history.push([Date.now(), command_name]);
        }
        else{
            console.log('This command not register');
        }
    }

    showHistory(){
        this.#history.forEach(element =>{
            console.log(element);
        });
    }
}