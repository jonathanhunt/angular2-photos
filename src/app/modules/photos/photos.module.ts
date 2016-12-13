import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumComponent } from './album/album.component';
import { PhotosConfig } from './photos.config';
import { PhotosService } from './services/photos.service';

@NgModule({
  imports: [ BrowserModule, RouterModule ],
  declarations: [ AlbumsListComponent, AlbumComponent ],
  providers: [ PhotosConfig, PhotosService ],
  bootstrap: [ AlbumsListComponent, AlbumComponent ],
  exports: [ AlbumsListComponent, AlbumComponent ]
})
export class PhotosModule { }
