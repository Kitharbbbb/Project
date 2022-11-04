import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private navCtrl: NavController){ }
  ngOnInit() {
    const title = this.activatedRoute.snapshot.paramMap.get('title');
    const decodedTitle = decodeURIComponent(title);
  }
  gotoConfirmbuy() {
    this.navCtrl.navigateForward('confirmbuy');
  }
  gotoChat() {
    this.navCtrl.navigateForward('chat');
  }
  gotoPlian() {
    this.navCtrl.navigateForward('plian');
  }

}
