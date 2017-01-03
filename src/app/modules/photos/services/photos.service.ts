import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotosetsEnvelope } from '../models/flickr/photosets-envelope.data';
import { PhotosetEnvelope } from '../models/flickr/photoset-envelope.data';
import { Photosets } from '../models/flickr/photosets.data';
import { Photoset } from '../models/flickr/photoset.data';
import { AlbumInfo } from '../models/album-info.data';
import { AlbumsList } from '../models/albums-list.data';
import { Album } from '../models/album.data';
import { PhotosConfig } from '../photos.config';

@Injectable()
export class PhotosService {
  // headers: Headers = new Headers({ 'Accept': 'application/json' });
  // options: RequestOptions = new RequestOptions({ headers: headers });

  constructor(public http: Http, private photosConfig: PhotosConfig) {
  }

  getPhotosets(): Observable<AlbumsList> {
    let headers = new Headers({ 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    // let url = '/api/' + this.photosConfig.PHOTOSETS_METHOD + '&user_id=' + this.photosConfig.FLICKR_USERID;
    let url = this.photosConfig.PHOTOSETS_URL;

    return this.http.get(url, options)
      .map((res: Response) => {
        let envelope: PhotosetsEnvelope<Photosets> = new PhotosetsEnvelope<Photosets>(res.json());
        if (envelope.stat.toLowerCase() == "ok") {
          let albums: AlbumsList = new AlbumsList(envelope.data);
          for (let photoset of envelope.data.photoset) {
            let album: AlbumInfo = new AlbumInfo(photoset);
            albums.albums.push(album);
          }

          return albums;
        }
        else {
          Observable.throw("ERROR");
        }
      })
      .catch((error: any) => Observable.throw("ERROR"));
  }

  getPhotosetInfo(photosetId): Observable<AlbumInfo> {
    let headers = new Headers({ 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = this.photosConfig.PHOTOSET_INFO_URL + photosetId;

    return this.http.get(url, options)
      .map((res: Response) => {
        let envelope: PhotosetEnvelope<Photoset> = new PhotosetEnvelope<Photoset>(res.json());
        if (envelope.stat.toLowerCase() == "ok") {
          return new AlbumInfo(envelope.data);
        }
        else {
          Observable.throw("ERROR");
        }
      })
      .catch((error: any) => Observable.throw("ERROR"));
  }

  getPhotosetPhotos(photosetId): Observable<Album> {
    let headers = new Headers({ 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = this.photosConfig.PHOTOSET_PHOTOS_URL + photosetId;

    return this.http.get(url, options)
    .map((res: Response) => {
      let envelope: PhotosetEnvelope<Photoset> = new PhotosetEnvelope<Photoset>(res.json());

      console.log(envelope);
      if (envelope.stat.toLowerCase() == "ok") {
        // let albums: AlbumsList = new AlbumsList(envelope.data);
        // for (let photoset of envelope.data.photoset) {
        //   let album: AlbumInfo = new AlbumInfo(photoset);
        //   albums.albums.push(album);
        // }

        // return new Album();
      }
      else {
        Observable.throw("ERROR");
      }
    })
    .catch((error: any) => Observable.throw("ERROR"));
  }
}
