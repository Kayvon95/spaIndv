import { Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import { Game } from '../shared/game.model';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';

@Injectable()
export class GamesService {
  private serverUrl = environment.serverUrl + 'games';
  private games: Game[] = [];
  gameEdited = new Subject<Game[]>();

  constructor(private http: Http) {}

  getGames(): Promise<Game[]> {
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.games = response.json() as Game[];
        return this.games;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
}
