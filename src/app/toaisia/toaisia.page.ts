import { Component, OnInit } from '@angular/core';
import { NavComponentWithProps, NavController } from '@ionic/angular';
@Component({
  selector: 'app-toaisia',
  templateUrl: './toaisia.page.html',
  styleUrls: ['./toaisia.page.scss'],
})
export class ToaisiaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotodetail2() {
    this.navCtrl.navigateForward('detail2');
  }

}
