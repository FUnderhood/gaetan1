import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/games/game.model';
import { GamesService } from 'src/app/games/games.service';
import { MenuController } from '@ionic/angular/';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedGames: Game[];
  listedloadedGames: Game[];

  constructor(
    private gamesService: GamesService,
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.loadedGames = this.gamesService.games;
  }

}
