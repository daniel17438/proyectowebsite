import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthRoutingModule } from './auth-routing.module';
import { AboutComponent } from '../components/about/about.component';
import { AcercaDeComponent } from '../components/acerca-de/acerca-de.component';



@NgModule({
  declarations: [
AboutComponent,
AcercaDeComponent
  ],

  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
