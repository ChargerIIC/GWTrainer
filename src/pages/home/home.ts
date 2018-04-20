import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Card } from '../../model/Card.model';
import { CardType } from '../../model/CardType.enum';
import { Vibration } from '@ionic-native/vibration';
import { FlashCardRepoProvider } from '../../providers/flash-card-repo/flash-card-repo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedCard: Card;
  selectedIndex: number;
  flashCardRepo: FlashCardRepoProvider;

  constructor(public navCtrl: NavController, private vibMotor: Vibration, private flashCardProvider: FlashCardRepoProvider) {

    //TODO: Create an actual repo
    this.flashCardRepo = flashCardProvider;

    this.selectedCard = this.flashCardRepo.getCardByIndex(0);
  }

  onQuestionAnswer($event : boolean){
    this.vibMotor.vibrate(0); //stop any current motor work
    if($event){
      this.selectedCard = this.flashCardRepo.getRandomCard();
    }
    else{
      console.log("Fail");
      this.vibMotor.vibrate(500); //.5 second
    }
  }
}
