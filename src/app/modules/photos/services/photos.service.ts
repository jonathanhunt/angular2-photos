import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Envelope } from '../models/envelope.data';
import { PhotosetEnvelope } from '../models/photoset-envelope.data';
import { PhotosetsResult } from '../models/photosets-result.data';
import { Photoset } from '../models/photoset.data';
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

  // getPhotosetInfo(): Observable<Envelope<Photosets>> {
  //   let headers = new Headers({ 'Accept': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  // }

  // getPhotosets(): Observable<PhotosetsResult> {
  //   let headers = new Headers({ 'Accept': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //
  //   // let url = '/api/' + this.photosConfig.PHOTOSETS_METHOD + '&user_id=' + this.photosConfig.FLICKR_USERID;
  //   let url = this.photosConfig.PHOTOSETS_URL;
  //
  //   return this.http.get(url, options)
  //     .map((res: Response) => {
  //       this.envelope = new Envelope<PhotosetsResult>(res.json());
  //       if (this.envelope.stat.toLowerCase() == "ok") {
  //         return this.envelope.data;
  //       }
  //       else {
  //         Observable.throw("ERROR");
  //       }
  //     })
  //     .catch((error: any) => Observable.throw("ERROR"));
  // }

  getPhotosets(): Observable<AlbumsList> {
    let headers = new Headers({ 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    // let url = '/api/' + this.photosConfig.PHOTOSETS_METHOD + '&user_id=' + this.photosConfig.FLICKR_USERID;
    let url = this.photosConfig.PHOTOSETS_URL;

    return this.http.get(url, options)
      .map((res: Response) => {
        let envelope: Envelope<PhotosetsResult> = new Envelope<PhotosetsResult>(res.json());
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

  getPhotosetInfo(photosetId): Observable<Album> {
    let headers = new Headers({ 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    // let url = '/api/' + this.photosConfig.PHOTOSETS_METHOD + '&user_id=' + this.photosConfig.FLICKR_USERID;
    let url = this.photosConfig.PHOTOSET_INFO_URL;

    return this.http.get(url, options)
      .map((res: Response) => {
        let envelope: PhotosetEnvelope<Photoset> = new PhotosetEnvelope<Photoset>(res.json());
        if (envelope.stat.toLowerCase() == "ok") {
          return new Album(envelope.data);
        }
        else {
          Observable.throw("ERROR");
        }
      })
      .catch((error: any) => Observable.throw("ERROR"));
  }
}
