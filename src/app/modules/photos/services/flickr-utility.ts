import { Injectable } from '@angular/core';
import { Photoset } from '../models/photoset.data';
import { PhotosConfig } from '../photos.config';

@Injectable()
export class FlickrUtility {

  // getSquarePhotoUrl(photoset) {
  // 	return this.getPhotoUrl(photoset, 's');
  // }
  //
  // getThumbnailPhotoUrl(photoset) {
  // 	return this.getPhotoUrl(photoset, 't');
  // }

  static getSmallPhotoUrl(photoset) {
  	return FlickrUtility.getPhotoUrl(photoset, 'm');
  }

  // getSmall320PhotoUrl(photoset) {
  // 	return this.getPhotoUrl(photoset, 'n');
  // }

  static getMediumPhotoUrl(photoset) {
  	return FlickrUtility.getPhotoUrl(photoset, '');
  }

  // getMedium640PhotoUrl(photoset) {
  // 	return this.getPhotoUrl(photoset, 'z');
  // }
  //
  // getMedium800PhotoUrl(photoset) {
  // 	return this.getPhotoUrl(photoset, 'c');
  // }
  //
  // getLargePhotoUrl(photoset) {
  // 	return this.getPhotoUrl(photoset, 'b');
  // }

  static getPhotoUrl(photoset, size) {
    let photoId: string;
    let sizeString: string;

    if (size == 's' || size == 't' || size == 'm' || size == 'n' || size == 'z' || size == 'b' || size == 'c') {
      sizeString = '_' + size;
    }
    else {
      // Medium or wrong size specified
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
