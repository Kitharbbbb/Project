import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  constructor(private navCtrl: NavController){}
  ngOnInit() {
  }
  gotoContactpage() {
    this.navCtrl.navigateForward('cart');
  }
  gotoContactpage1() {
    this.navCtrl.navigateForward('chat');
  }
  gotoContactpagesetup() {
    this.navCtrl.navigateForward('setup');
  }
  gotoContactpageh() {
    this.navCtrl.navigateForward('h');
  }
}
