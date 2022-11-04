import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-kreangyon',
  templateUrl: './kreangyon.page.html',
  styleUrls: ['./kreangyon.page.scss'],
})
export class KreangyonPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotodetail3() {
    this.navCtrl.navigateForward('detail3');
}
}
