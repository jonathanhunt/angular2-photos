import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about';
import { AlbumsListComponent } from './modules/photos/albums-list/albums-list.component';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: AlbumsListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'photos', component: AlbumsListComponent },
  { path: '**',    component: NoContentComponent },
];
