export class Game {
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

  get yearOfRelease(): number {
    return this.yearOfRelease;
  }

  set yearOfRelease(value: number) {
    this.yearOfRelease = value;
  }

  get genre(): string {
    return this.genre;
  }

  set genre(value: string) {
    this.genre = value;
  }

  get imagePath(): string {
    return this.imagePath;
  }

  set imagePath(value: string) {
    this.imagePath = value;
  }

  get websiteUrl(): string {
    return this.websiteUrl;
  }

  set websiteUrl(value: string) {
    this.websiteUrl = value;
  }
}
