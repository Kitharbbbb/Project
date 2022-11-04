import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-lomax',
  templateUrl: './lomax.page.html',
  styleUrls: ['./lomax.page.scss'],
})
export class LomaxPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotodetail4() {
    this.navCtrl.navigateForward('detail4');
}
}
