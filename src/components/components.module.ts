import { NgModule } from '@angular/core';
import { CardViewComponent } from './card-view/card-view';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [CardViewComponent],
	imports: [IonicModule],
	exports: [CardViewComponent]
})
export class ComponentsModule {}
