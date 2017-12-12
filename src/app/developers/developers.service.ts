import {Developer} from './developer.model';
import {Injectable} from '@angular/core';
import { Game } from '../shared/game.model';
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs/Subject';
import {Http} from '@angular/http';

@Injectable()
export class DevelopersService {
  developersChanged = new Subject<Developer[]>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + 'developers'; // URL to web api
  private developers: Developer[] = [];

  constructor(private http: Http) {
  }

  public getDevelopers(): Promise<Developer[]> {
    console.log('items ophalen van server');
    return this.http.get(this.serverUrl)
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.developers = response.json() as Developer[];
        return this.developers;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  public getDeveloper(_id: string): Promise<Developer> {
    return this.http.get(this.serverUrl + '/' + _id)
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Developer;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  addDeveloper(_id: Developer) {
    this.developers.push(_id);
    this.developersChanged.next(this.developers.slice());
  }

  updateDeveloper(_id: string, newDeveloper: Developer) {
    this.developers[_id] = newDeveloper;
    this.developersChanged.next(this.developers.slice());
  }

  deleteDeveloper(_id: string) {
    this.http.delete(this.serverUrl + '/' + _id)
      .toPromise()
      .then(response => {
        console.dir(response.json());
      })
      .catch(error => {
        console.log('handleError');
      });
    console.log('developers.length: ' + this.developers.length);
    this.developers.splice(this.findIndexById(_id), 1);
  }

  private findIndexById(id: string) {
    for (let i = 0; i < this.developers.length; i++) {
      console.log('i: ' + i);
      if (this.developers[i]._id === id) {
        return i;
      }
    }
    return this.developers.length;
  }

  // private developers: Developer[] = [
  //   new Developer('Riot',
  //     'West Los Angeles',
  //     2500,
  //     'http://media.wwg.com/2016/11/riot-games-196346.jpg',
  //     [
  //       new Game('League of Legends', 2009, 'MOBA')
  //     ]),
  //   new Developer('CD Projekt Red',
  //     'Warsaw',
  //     700,
  //     'https://cdna.artstation.com/p/jobs/images/000/003/970/thumb/open-uri20151015-25777-5cxdgl.jpg?1508762354',
  //     [
  //       new Game('The Witcher', 2007, 'ARPG'),
  //       new Game('The Witcher 2: Assassins of Kings', 2011, 'ARPG'),
  //       new Game('The Witcher 3: Wild Hunt', 2007, 'ARPG'),
  //     ])
  // ];
  //
  // getDevelopers() {
  //   return this.developers.slice();
  // }
  //
  // getDeveloper(index: number) {
  //   return this.developers[index];
  // }
}
