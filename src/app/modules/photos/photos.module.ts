import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { PhotosConfig } from './photos.config';
import { PhotosService } from './services/photos.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AlbumsListComponent ],
  providers: [ PhotosConfig, PhotosService ],
  bootstrap: [ AlbumsListComponent ],
  exports: [ AlbumsListComponent ]
})
export class PhotosModule { }
