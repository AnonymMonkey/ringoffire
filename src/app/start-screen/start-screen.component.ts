import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GameService } from '../firestore-service/game.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent {
  currentId!: string;

  constructor(
    private firestore: GameService,
    private router: Router,
  ) {}

  newGame() {
    let game = new Game();
    this.firestore.add(game.toJson());
    console.log(this.currentId);
    this.router.navigateByUrl('/game');
  }
}
