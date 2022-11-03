import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private navCtrl: NavController){}
  ngOnInit()
   {

  }
<<<<<<< HEAD
  gotoContactpage() {
=======
  gotoCart() {
>>>>>>> f58853e31fde9e47e02dcc6d46b8a5927d9611ea
    this.navCtrl.navigateForward('cart');
  }
  gotoChat() {
    this.navCtrl.navigateForward('chat');
  }
  gotoCen() {
    this.navCtrl.navigateForward('cen');
  }
  gotoPlian() {
    this.navCtrl.navigateForward('plian');
  }
}
