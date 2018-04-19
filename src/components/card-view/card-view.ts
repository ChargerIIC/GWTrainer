import { Component, Input } from '@angular/core';
import { Card } from '../../model/Card.model';

/**
 * Generated class for the CardViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-view',
  templateUrl: 'card-view.html'
})
export class CardViewComponent {

  @Input() card: Card;

  
  constructor() {
  }

  //called when user answers a question
  answerSelected(index: number){
    console.log("answer: " + index);
    if(index == this.card.correctAnswer){
      console.log("Success");
    }
    else{
      console.log("Nope");
    }
  }
}
