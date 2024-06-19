import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  docData,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Game } from '../../models/game';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  firestore: Firestore = inject(Firestore);

  currentId!: string;

  constructor() {}

  async add(obj: {}) {
    let data = await addDoc(this.getGameRef(), obj);
    this.currentId = data.id;
    return data.id;
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

  async updateSingleGame(id: string, item: {}) {
    await updateDoc(this.getSingleDocRef(id), item);
  }
}
