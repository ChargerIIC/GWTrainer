import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Card } from '../../model/Card.model';
import { Vibration } from '@ionic-native/vibration';
import { FlashCardRepoProvider } from '../../providers/flash-card-repo/flash-card-repo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedCard: Card;
  selectedIndex: number;

  constructor(public navCtrl: NavController, private vibMotor: Vibration, private flashCardProvider: FlashCardRepoProvider) {

    this.selectedCard = new Card();
    this.flashCardProvider.loadCards().subscribe(o => this.selectedCard = flashCardProvider.getRandomCard());
  }

  onQuestionAnswer($event : boolean){
    this.vibMotor.vibrate(0); //stop any current motor work
    if($event){
      this.selectedCard = this.flashCardProvider.getRandomCard();
    }
    else{
      console.log("Fail");
      this.vibMotor.vibrate(500); //.5 second
    }
  }
}
