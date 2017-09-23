import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/list/list.module#ListModule'
  }, {
    path: 'movie/:id',
    loadChildren: 'app/movie/movie.module#MovieModule'
  }, {
    path: 'movie',
    redirectTo: '/',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: '/'
  }
];

export const routing = RouterModule.forRoot(routes);