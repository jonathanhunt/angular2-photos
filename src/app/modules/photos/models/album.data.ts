import { FlickrUtility } from '../services/flickr-utility';

export class Album {
  id: string;
  title: string;
  description: string;
  photoCount: number;
  photoUrl: string;


  constructor(photoset: any) {
    this.id = photoset.id;
    this.title = photoset.title._content;
    this.description = photoset.description._content;
    this.photoCount = photoset.photos;
    // this.photoUrl = FlickrUtility.getMedium640PhotoUrl(photoset);
  }
}
