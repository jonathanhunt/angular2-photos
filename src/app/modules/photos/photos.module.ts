import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumsListComponent } from './albums-list.component';
import { PhotosetInfoComponent } from './photoset-info/photoset-info.component';
import { PhotosConfig } from './photos.config';
import { PhotosService } from './services/photos.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AlbumsListComponent, PhotosetInfoComponent ],
  providers: [ PhotosConfig, PhotosService ],
  bootstrap: [ AlbumsListComponent, PhotosetInfoComponent ],
  exports: [ AlbumsListComponent, PhotosetInfoComponent ]
})
export class PhotosModule { }
