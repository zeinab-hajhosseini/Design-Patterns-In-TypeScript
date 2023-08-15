// Singleton Use Case Example Code

import { Game1 } from "./game1";
import { Game2 } from "./game2";
import { Game3 } from "./game3";

const GAME1 = new Game1();
const GAME2 = new Game2();
const GAME3 = new Game3();

GAME1.addWinner(2, "zeinab");
GAME2.addWinner(1, "zahra");
GAME3.addWinner(3, "ali");

console.log(GAME1.leaderboard == GAME2.leaderboard);
console.log(GAME2.leaderboard == GAME3.leaderboard);

GAME1.leaderboard.print();
GAME2.leaderboard.print();
GAME3.leaderboard.print();
