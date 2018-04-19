import { CardType } from "./CardType.enum";

export class Card{

    id: number;
    question: string;
    type: CardType;

    //If Multiple Choice
    answers: string[];
}