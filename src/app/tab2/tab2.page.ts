import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

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
}
