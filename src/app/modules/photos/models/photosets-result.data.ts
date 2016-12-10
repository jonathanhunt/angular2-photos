import { Photoset } from './photoset.data';

export class PhotosetsResult {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photoset: Array<Photoset>;

  constructor(photosetsResult: any) {
    this.page = photosetsResult.page;
    this.pages = photosetsResult.pages;
    this.perpage = photosetsResult.perpage;
    this.total = photosetsResult.total;
    this.photoset = new Array<Photoset>(photosetsResult.photoset);
  }
}
