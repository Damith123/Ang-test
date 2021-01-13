import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'one',
  },
  {
    path: 'all-orders',
    loadChildren: () =>
      import('./all-items/all-items.module').then(
        (m) => m.AllItemsModule
      ),
  },
  {
    path: 'ongoing-orders',
    loadChildren: () =>
      import('./ongoing-items/ongoing-items.module').then(
        (m) => m.OngoingItemsModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
