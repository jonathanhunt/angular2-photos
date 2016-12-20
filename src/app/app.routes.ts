import { Routes, RouterModule } from '@angular/router';
import { AlbumsListComponent } from './modules/photos/albums-list/albums-list.component';
import { AlbumComponent } from './modules/photos/album/album.component';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: AlbumsListComponent },
  { path: 'photos', component: AlbumsListComponent },
  { path: 'albums/:id', component: AlbumComponent },
  { path: '**',    component: NoContentComponent },
];
