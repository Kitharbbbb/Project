import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  constructor(private navCtrl: NavController){}
  ngOnInit()
   {

  }
  gotoContactpage() {
    this.navCtrl.navigateForward('cart');
  }
  gotoContactpage1() {
    this.navCtrl.navigateForward('chat');
  }
  gotoContactpage2() {
    this.navCtrl.navigateForward('myorder');
  }
  gotoContactpage3() {
    this.navCtrl.navigateForward('setup');
  }
  gotoContactpage4() {
    this.navCtrl.navigateForward('h');
  }
}
