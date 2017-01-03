import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PhotosService } from '../services/photos.service';
import { Album } from '../models/album.data';

@Component({
  selector: 'album',
  template: require('./album.component.html')
})

export class AlbumComponent {
  //album: Observable<Album> = new Observable<Album>();
  title: string;

  constructor (private route: ActivatedRoute, private photosService: PhotosService) {
  }

  ngOnInit() {
    let photosetId = this.route.params['value'].id;
    console.log(photosetId);

    this.photosService.getPhotosetInfo(photosetId).subscribe(
      (result) => {
        if (result) {
          this.title = result.title;
          console.log(result);
        }
      },
      (error) => {
        if (error) {

        }
      }
    );

    this.photosService.getPhotosetPhotos(photosetId).subscribe(
      (result) => {
        if (result) {
          console.log(result);
        }
      },
      (error) => {
        if (error) {

        }
      }
    );
  }
}
