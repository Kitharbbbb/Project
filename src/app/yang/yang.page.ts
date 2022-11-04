import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-yang',
  templateUrl: './yang.page.html',
  styleUrls: ['./yang.page.scss'],
})
export class YangPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotodetail5() {
    this.navCtrl.navigateForward('detail5');
}
}
