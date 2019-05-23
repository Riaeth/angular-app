import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSearchComponent } from './search/form-search/form-search.component';
import { ListaOwnersComponent } from './owner/lista-owners/lista-owners.component';
import { DetailedOwnerComponent } from './owner/detailed-owner/detailed-owner.component';

const routes: Routes = [
  {
    path: 'search',
    component: FormSearchComponent
  },
  {
    path: 'owners',
    component: ListaOwnersComponent
  },
  {
    path: 'owners/:id',
    component: DetailedOwnerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
