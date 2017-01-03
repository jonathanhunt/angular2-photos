import { Photo } from './photo.data';

export class PhotosetInfo {
  id: string;
  owner: string;
  ownername: string;
  page: number;
  per_page: number;
  pages: number;
  total: string;
  title: string;
  photos: Array<Photo>;

  constructor(photoset: any) {
    this.id = photoset.id;
    this.owner = photoset.owner;
    this.ownername = photoset.ownername;
    this.page = photoset.page;
    this.per_page = photoset.per_page;
    this.pages = photoset.pages;
    this.total = photoset.total;
    this.title = photoset.title;
    this.photos = photoset.photo;
  }
}
