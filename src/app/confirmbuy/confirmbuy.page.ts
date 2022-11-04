import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmbuy',
  templateUrl: './confirmbuy.page.html',
  styleUrls: ['./confirmbuy.page.scss'],
})
export class ConfirmbuyPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

}
