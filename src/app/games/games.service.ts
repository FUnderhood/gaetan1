import { Injectable } from '@angular/core';
import { Game } from 'src/app/games/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private _games: Game[] = [
    new Game(
      'g1',
      'Doodler',
      'is an app for an iOS devices, Android, Symbian, and Windows Phone 7 where you control a creature called "The Doodler" to jump on multiple platforms and jump as high as you can without falling',
      'https://static.wikia.nocookie.net/doodlejump1/images/c/cb/DoodleJumpAppIcon.png/revision/latest?cb=20220523194352'
    ),
    new Game(
      'g2',
      'Break',
      'In Break Bricks - Ball s Quest, you have to move a paddle back and forth so you can hit a ball toward some colored bricks, which disappear when struck',
      'https://play-lh.googleusercontent.com/4mnD4wgDSMQGmU_jP9sbYxmUUo6pSym3aYZKSc1vUUItBYhRP1qndJDAQP3EuNyvntk'
    ),
    new Game(
      'g3',
      'Skills',
      'In Break Bricks - Ball s Quest, you have to move a paddle back and forth so you can hit a ball toward some colored bricks, which disappear when struck',
      'https://static.wikia.nocookie.net/doodlejump1/images/c/cb/DoodleJumpAppIcon.png/revision/latest?cb=20220523194352'
    ),
  ];

  get games(){
    return [...this._games];
  }
  constructor() { }
}
