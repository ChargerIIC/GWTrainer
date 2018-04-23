import { Component, Input, EventEmitter, Output } from '@angular/core';
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
  @Output() questionResult: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  letterArray : Array<string> = ["a","b","c","d","e","f"];

  constructor() {
  }

  getLetter(num : number): string{
    //TODO find out if the array is the best method
    if(num <= 6)
    {
      return this.letterArray[num] + " )";
    }
    else{
      return "x )";
    }
  }

  //called when user answers a question
  answerSelected(index: number){
    console.log("answer: " + index);
    if(index == this.card.correctAnswer){
      this.questionResult.emit(true);
    }
    else{
      this.questionResult.emit(false);
    }
  }
}
