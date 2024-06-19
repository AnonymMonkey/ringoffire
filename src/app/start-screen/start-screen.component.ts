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
  constructor(
    private firestore: GameService,
    private router: Router,
  ) {}

  async newGame() {
    let game = new Game();
    let id = await this.firestore.add(game.toJson());
    this.router.navigateByUrl('/game/' + id);
  }
}
