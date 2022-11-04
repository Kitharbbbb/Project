import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-puanmalai',
  templateUrl: './puanmalai.page.html',
  styleUrls: ['./puanmalai.page.scss'],
})
export class PuanmalaiPage implements OnInit {

  constructor(private  navCtrl: NavController ) { }

  ngOnInit() {
  }
  gotodetail(){
    this.navCtrl.navigateForward('detail');
  }

}
