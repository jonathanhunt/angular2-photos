import { AlbumInfo } from './album-info.data';

export class AlbumsList {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  albums: Array<AlbumInfo>;

  constructor(photosetsResult: any) {
    this.page = photosetsResult.page;
    this.pages = photosetsResult.pages;
    this.perpage = photosetsResult.perpage;
    this.total = photosetsResult.total;
    this.albums = new Array<AlbumInfo>();
  }
}
