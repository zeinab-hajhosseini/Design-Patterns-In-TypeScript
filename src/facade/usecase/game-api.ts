import GameEngine, { GameState } from "./game-engine";
import Reports from "./reports";
import Users from "./users";
import Wallets from "./wallets";

// The Game API facade
export class GameAPI{
    #game_engine: GameEngine;
    #users: Users;
    #wallets: Wallets;
    #reports: Reports;


    constructor(){
        this.#game_engine = new GameEngine();
        this.#users = new Users();
        this.#wallets = new Wallets();
        this.#reports = new Reports();
    }

    getBalance(userId: string): number{
        // Get a players balance
        return this.#wallets.getBalance(userId);
    }

    gameState(): GameState{
        // Get the current game state
        return this.#game_engine.getGameState();
    }

    getHistory(): { [id: string]: [number, string] } {
        // get the game history
        return this.#reports.getHistory()
    }

    changePwd(userId: string, password: string):{}{
        // change users password
        return this.#users.changePwd(userId, password);
    }

    submitEntry(userId: string, entry: number):boolean{
        // submit a bet
        return this.#game_engine.submitEntry(userId, entry);
    }
    registerUser(newUser: { [id: string]: string }): string{        
        // register a new user and returns the new id
        return this.#users.registerUser(newUser);
    }
}