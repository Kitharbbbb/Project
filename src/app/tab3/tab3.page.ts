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
    this.navCtrl.navigateForward('cart');
  }
  gotoContactpage1() {
    this.navCtrl.navigateForward('chat');
  }
  gotoContactpage2() {
    this.navCtrl.navigateForward('cen');
  }
  gotoContactpage3() {
    this.navCtrl.navigateForward('plian');
  }
=======
gotoContactpage() {
  this.navCtrl.navigateForward('cart');
}
gotoContactpage1() {
  this.navCtrl.navigateForward('chat');

}
>>>>>>> 64d7f90d12105036c6dd1705fd2af86d5bde6513
}
