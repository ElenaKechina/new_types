import IMovie from './iMovie';

export default class Movie implements IMovie {
  readonly name: string;
  readonly localizedName: string;
  readonly year: number;
  readonly country: string;
  readonly genre: string[];
  readonly time: string;

  constructor(obj: IMovie) {
    this.name = obj.name;
    this.country = obj.country;
    this.genre = obj.genre;
    this.localizedName = obj.localizedName;
    this.time = obj.time;
    this.year = obj.year;
  }
}
