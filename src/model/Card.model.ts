import { CardType } from "./CardType.enum";

export class Card{

    id: number;
    public question: string;
    type: CardType;
    correctAnswer: number;//index of correct answer

    //If Multiple Choice
    answers: string[];

    constructor(){
        this.answers = new Array<string>();
    }
}