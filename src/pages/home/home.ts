import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SampleModalPage } from '../sample-modal/sample-modal';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}
  
   openModal() {
  let obj = {userId: '1', name: 'Bob', email: 'bob@unicorn.com'};
  let myModal = this.modalCtrl.create(SampleModalPage, obj);
  myModal.present();
}

}
