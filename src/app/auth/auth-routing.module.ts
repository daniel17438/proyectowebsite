import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { AcercaDeComponent } from '../components/acerca-de/acerca-de.component';

export const routes: Routes = [
{
path: '',
children:[
  {
  path: 'about',
  component: AboutComponent
  },
  {
    path: 'acerca-de',
    component: AcercaDeComponent
  },
  {
    path: '**',
    redirectTo: 'cartelera'
  }

]
}]

@NgModule({

  imports: [
   RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
