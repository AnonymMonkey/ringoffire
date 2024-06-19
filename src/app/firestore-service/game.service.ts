import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  docData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Game } from '../../models/game';
import { StartScreenComponent } from '../start-screen/start-screen.component';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  firestore: Firestore = inject(Firestore);

  constructor(private startscreen: StartScreenComponent) {
    this.getGameRef();
  }

  async add(obj: {}) {
    let data = await addDoc(this.getGameRef(), obj);
    this.startscreen.currentId = data.id;
  }

  getGameRef() {
    return collection(this.firestore, 'games');
  }

  subGameRef() {
    collectionData(this.getGameRef()).subscribe((game) => {
      console.log('Game update', game);
    });
  }

  getSingleDocRef(params: string) {
    return doc(this.getGameRef(), params);
  }

  subSingleGameRef(params: string, game: Game) {
    docData(this.getSingleDocRef(params)).subscribe((singleGame: any) => {
      console.log('Game update', singleGame);
      game.players = singleGame['players'];
      game.stack = singleGame['stack'];
      game.playedCards = singleGame['playedCards'];
      game.currentPlayer = singleGame['currentPlayer'];
    });
  }
}
