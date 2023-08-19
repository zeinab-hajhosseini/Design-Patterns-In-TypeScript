// Bridge Pattern Use Case
import CircleImplementor from "./circle-implementor";
import SquareImplementor from "./square-implementor";
import Square from "./square";
import Circle from "./circle";

const CIRCLE = new Circle(new CircleImplementor());
CIRCLE.draw();

const SQUARE = new Square(new SquareImplementor());
SQUARE.draw();