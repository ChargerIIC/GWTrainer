import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Card } from '../../model/Card.model';
import { CardType } from '../../model/CardType.enum';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedCard: Card;
  selectedIndex: number;
  cards: Card[];

  constructor(public navCtrl: NavController) {

    //TODO: Create an actual repo
    this.cards = new Array<Card>();
    var card = new Card();
    card.id = 0;
    card.correctAnswer = 0;
    card.type = CardType.MultipleChoice;
    card.question = "What is required for a model to be declared a Warlord?"
    card.answers.push("Model must be a character");
    card.answers.push("Model must be an infantry model");
    card.answers.push("Model must be at least 2 inches tall");
    this.cards.push(card);

    card = new Card();
    card.id = 1;
    card.correctAnswer = 1;
    card.type = CardType.MultipleChoice;
    card.question = "When does a defending unit fire Overwatch?"
    card.answers.push("After a Charge movement is completed");
    card.answers.push("When a Charge is declared");
    card.answers.push("After the charge attack completes");
    this.cards.push(card);

    this.selectedCard = this.cards[0]; //TODO Randomize - Consider deck shuffle?
    this.selectedIndex = 0;
  }

  onQuestionAnswer($event : boolean){
    if($event){
      if(this.selectedIndex >= this.cards.length-1){
        this.selectedIndex = 0;
        console.log
      }
      else{
        this.selectedIndex++;
      }
    console.log("Success " + this.selectedIndex);

      this.selectedCard = this.cards[this.selectedIndex];
    }
    else{
      console.log("Fail");
    }
  }
}
