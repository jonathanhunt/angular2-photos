import { Injectable } from '@angular/core';
import { Photoset } from '../models/photoset.data';
import { PhotosConfig } from '../photos.config';

@Injectable()
export class FlickrUtility {

  // Sizes from Flickr:
  // s: Square 75 - 75 x 75
  // q: Square 150 - 150 x 150
  // t: Thumbnail - 100 x 66
  // m: Small 240 - 240 x ?
  // n: Small 320 - 320 x ?
  // : Medium 500 - 500 x ?
  // z: Medium 640 - 640 x ?
  // c: Medium 800 - 800 x ?
  // l: Large 1024 - 1024 x ?
  // h: Large 1600 - 1600 x ?
  // k: Large 2048 - 2048 x ?
  // o: Original

  private static availableSizes = new Array('s', 'q', 't', 'm', 'n', 'z', 'c', 'l', 'h', 'k', 'o');

  static getThumbnailPhotoUrl(photoset) {
  	return FlickrUtility.getPhotoUrl(photoset, 't');
  }

  static getSmall240PhotoUrl(photoset) {
  	return FlickrUtility.getPhotoUrl(photoset, 'm');
  }

  static getSmall320PhotoUrl(photoset) {
  	return FlickrUtility.getPhotoUrl(photoset, 'n');
  }

  static getMedium500PhotoUrl(photoset) {
  	return FlickrUtility.getPhotoUrl(photoset, '');
  }

  static getMedium640PhotoUrl(photoset) {
  	return FlickrUtility.getPhotoUrl(photoset, 'z');
  }

  static getPhotoUrl(photoset, size) {
    let photoId: string;
    let sizeString: string;

    if (FlickrUtility.availableSizes.indexOf(size) > -1) {
      sizeString = '_' + size;
    }
    else {
      // Size is invalid or not specified
      sizeString = '';
    }

    if (photoset) {
      photoId = photoset.primary;
    }
    else if (photoset.id) {
      photoId = photoset.id;
    }

    return 'http://farm' + photoset.farm + '.static.flickr.com/' + photoset.server + '/' + photoId + '_' + photoset.secret + sizeString + '.jpg';
  }
}
