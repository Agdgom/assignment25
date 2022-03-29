import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./users/users-list/user-list.module').then(
        (m) => m.UserListModule
      ),
  },
  {
    path: 'details/:username',
    loadChildren: () =>
      import('./users/user-details/user-details.module').then(
        (m) => m.UserDetailsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./users/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
