import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlanosComponent } from './components/planos/planos.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planos', component: PlanosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
