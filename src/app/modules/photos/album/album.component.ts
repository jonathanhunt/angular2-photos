import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
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

  constructor (private photosService: PhotosService) {
  }

  ngOnInit() {
    this.photosService.getPhotosetInfo("123").subscribe(
      (result) => {
        if (result) {
          //this.album = result;
          this.title = result.title;
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
