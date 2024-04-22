export class Serie {
    numb: number;
    title: string;
    channel: string;
    seasons: number;
    description: string;
    url: string;
    urlImage: string;
  
    constructor(numb: number, title: string, channel: string, seasons: number, description: string, url: string, urlImage: string) {
      this.numb = numb;
      this.title = title;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.url = url;
      this.urlImage = urlImage;
    }

}