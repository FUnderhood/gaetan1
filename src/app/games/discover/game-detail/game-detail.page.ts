import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NavController } from '@ionic/angular/';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.page.html',
  styleUrls: ['./game-detail.page.scss'],
})
export class GameDetailPage implements OnInit {

  constructor(private router: Router,
              private navCtrl: NavController) { }

  ngOnInit() {
  }

  joinGame(){
    this.router.navigateByUrl('/games/tabs/discover');
  }

}
