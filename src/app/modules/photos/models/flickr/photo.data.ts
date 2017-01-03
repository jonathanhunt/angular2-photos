import { Photoset } from './photoset.data';

export class Photo {
  id: string;
  primary: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  isprimary: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;

  constructor(photo: any) {
    this.id = photo.id;
    this.primary = photo.primary;
    this.secret = photo.secret;
    this.server = photo.server;
    this.farm = photo.farm;
    this.title = photo.title;
    this.isprimary = photo.isprimary;
    this.ispublic = photo.ispublic;
    this.isfriend = photo.isfriend;
    this.isfamily = photo.isfamily;
  }
}
