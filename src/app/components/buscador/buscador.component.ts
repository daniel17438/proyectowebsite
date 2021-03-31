import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../service/peliculas.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  url = 'http://image.tmdb.org/t/p/w300';
  pelicula: any;
  regresar = '';
  busqueda = '';
  loading: boolean;

  constructor(public route: ActivatedRoute,
              public servi: PeliculasService, public auth: AuthService ) {

this.auth.loading=true;
                this.route.params.subscribe((data: any) => {

                  this.servi.buscarById(data.id).subscribe((pelicula: any[]) => {
                    this.auth.loading = false;
                    console.log(pelicula);
                    this.pelicula = pelicula;
                  }, error => {
                    this.auth.loading= false;


                  });
                });
              }

  ngOnInit() {

  }

}
