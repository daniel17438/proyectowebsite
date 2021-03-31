import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagenPipe } from './pipes/imagen.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { InicioComponent } from './components/inicio/inicio.component';
import { AboutComponent } from './components/about/about.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BuscadorComponent } from './components/buscador/buscador.component';




@NgModule({
  declarations: [
    AppComponent,
    CarteleraComponent,
    LoginComponent,
    ImagenPipe,
    NavbarComponent,
    RegistroComponent,
    PeliculaComponent,
    InicioComponent,
    BuscadorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
