import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { PhotosService } from '../services/photos.service';


@Component({
  selector: 'album',
  template: require('./album.component.html')
})

export class AlbumComponent {

  constructor (private photosService: PhotosService) {
  }

  ngOnInit() {
    // this.photosService.getPhotosets().subscribe(
    //   (result) => {
    //     if (result) {
    //       //this.albumsList = new Observable<AlbumsList>();
    //
    //       //this.albums = this.albumsList.albums;
    //       this.albums = result.albums;
    //     }
    //   },
    //   (error) => {
    //     if (error) {
    //
    //     }
    //   }
    // );
  }
}
