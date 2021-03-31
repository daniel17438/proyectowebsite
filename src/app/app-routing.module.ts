import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { AboutComponent } from './components/about/about.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const routes: Routes = [
  {path: 'cartelera', component: CarteleraComponent, canActivate: [ AuthorizationGuard ]},
  {path: 'login', component: LoginComponent, canActivate: [ AuthorizationGuard ]},
  {path: 'pelicula', component: PeliculaComponent, canActivate: [ AuthorizationGuard ]},
  {path: 'registro', component: RegistroComponent, canActivate: [ AuthorizationGuard ]},
  {path: 'buscador/:id', component: BuscadorComponent, canActivate: [ AuthorizationGuard ]},
  {path: 'inicio', component: InicioComponent},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )},
  {path: '**', pathMatch: 'full', redirectTo: 'cartelera'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
