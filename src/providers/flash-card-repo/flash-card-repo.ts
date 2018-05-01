import { Injectable } from '@angular/core';
import { Card } from '../../model/Card.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

/*
  Generated class for the FlashCardRepoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FlashCardRepoProvider {

  cards: Card[];

  constructor(public http:Http) {
    this.cards = new Array<Card>();
  }

  loadCards(){
    return this.http.get("./assets/json/flashcards.json").map(res =>{
      var data = res.json();
      data.forEach(je => {
        var card = new Card();
        card.id = je.id;
        card.question = je.question;
        card.type = je.type;
        card.answers = je.answers;
        card.correctAnswer = je.correctAnswer;
        this.cards.push(card);
      });
    })

  }

  getRandomCard() : Card{
    var result = Math.floor(Math.random() * this.cards.length); //pull a random card
    return this.cards[result];
  }

  getCardByIndex(idx: number): Card{
    return this.cards[idx];
  }
}
