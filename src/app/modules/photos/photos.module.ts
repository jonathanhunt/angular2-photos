import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumComponent } from './album/album.component';
import { PhotosConfig } from './photos.config';
import { PhotosService } from './services/photos.service';

const photoRoutes: Routes = [
  { path: 'photos',  component: AlbumsListComponent },
  { path: 'albums/:id', component: AlbumComponent }
];

@NgModule({
  imports: [ BrowserModule, RouterModule.forChild(photoRoutes) ],
  declarations: [ AlbumsListComponent, AlbumComponent ],
  providers: [ PhotosConfig, PhotosService ],
  bootstrap: [ AlbumsListComponent, AlbumComponent ],
  exports: [ AlbumsListComponent, AlbumComponent, RouterModule ]
})
export class PhotosModule { }
