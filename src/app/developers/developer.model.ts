import { Game } from '../shared/game.model';
export class Developer {
  // private __id: string;
  // private name: string;
  // private hqLocation: string;
  // private employeeCount: number;
  // private imagePath: string;
  // private games: Game[];

  // constructor(_id: string, name: string, hqLocation: string, employeeCount: number, imgPath: string, games: Game[]) {
  // //  this.name = name;
  // //  this.location = location;
  // //  this.employeeCount = employeeCount;
  // //  this.imagePath = imgPath;
  // //  this.games = games;
  // }


  get _id(): string {
    return this._id;
  }

  set _id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this.name;
  }

  set name(value: string) {
    this.name = value;
  }

  get yearFounded(): number {
    return this.yearFounded;
  }

  set yearFounded(value: number) {
    this.yearFounded = value;
  }

  get hqCity(): string {
    return this.hqCity;
  }

  set hqCity(value: string) {
    this.hqCity = value;
  }

  get hqCountry(): string {
    return this.hqCountry;
  }

  set hqCountry(value: string) {
    this.hqCountry = value;
  }

  get employeeCount(): number {
    return this.employeeCount;
  }

  set employeeCount(value: number) {
    this.employeeCount = value;
  }

  get websiteUrl(): string {
    return this.websiteUrl;
  }

  set websiteUrl(value: string) {
    this.websiteUrl = value;
  }

  get imagePath(): string {
    return this.imagePath;
  }

  set imagePath(value: string) {
    this.imagePath = value;
  }

  get games(): Game[] {
    return this.games;
  }

  set games(value: Game[]) {
    this.games = value;
  }
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
