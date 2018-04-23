import { Injectable } from '@angular/core';
import { Card } from '../../model/Card.model';
import { CardType } from '../../model/CardType.enum';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

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

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getRandomCard() : Card{
    var result = Math.floor(Math.random() * this.cards.length); //pull a random card
    return this.cards[result];
  }

  getCardByIndex(idx: number): Card{
    return this.cards[idx];
  }
}
