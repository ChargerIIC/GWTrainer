import { Injectable } from '@angular/core';
import { Card } from '../../model/Card.model';
import { CardType } from '../../model/CardType.enum';

/*
  Generated class for the FlashCardRepoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FlashCardRepoProvider {

  cards: Card[];

  constructor() {
    this.cards = new Array<Card>();
    var idx = 0;

    var card = new Card();
    card.id = idx;
    card.correctAnswer = 0;
    card.type = CardType.MultipleChoice;
    card.question = "What is required for a model to be declared a Warlord?"
    card.answers.push("Model must be a character");
    card.answers.push("Model must be an infantry model");
    card.answers.push("Model must be at least 2 inches tall");
    this.cards.push(card);
    idx++;

    card = new Card();
    card.id = idx;
    card.correctAnswer = 1;
    card.type = CardType.MultipleChoice;
    card.question = "When does a defending unit fire Overwatch?"
    card.answers.push("After a Charge movement is completed");
    card.answers.push("When a Charge is declared");
    card.answers.push("After the charge attack completes");
    this.cards.push(card);
    idx++;

    card = new Card();
    card.id = idx;
    card.correctAnswer = 1;
    card.type = CardType.MultipleChoice;
    card.question = "What is the maximum distance in which a charge can be declared?"
    card.answers.push("Within 18 inches");
    card.answers.push("Within 12 inches");
    card.answers.push("Within the unit's max charge distance");
    this.cards.push(card);
    idx++;

    card = new Card();
    card.id = idx;
    card.correctAnswer = 1;
    card.type = CardType.MultipleChoice;
    card.question = "What is the Warp Charge value of Smite?"
    card.answers.push("5");
    card.answers.push("5 + 1 for each previous instance of Smite cast during the current phase");
    card.answers.push("5 + 1 for each previous instance of Smite cast during the game");
    this.cards.push(card);
    idx++;

  }

  getRandomCard() : Card{
    var result = Math.floor(Math.random() * this.cards.length); //pull a random card
    return this.cards[result];
  }

  getCardByIndex(idx: number): Card{
    return this.cards[idx];
  }
}
