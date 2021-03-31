import { Component, Input, OnInit } from '@angular/core';
import { PeliculasService } from '../../service/peliculas.service';


@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {



  urlImagen: string= 'http://image.tmdb.org/t/p/w300';

  constructor( public servicios: PeliculasService ) { }





  ngOnInit(): void {
    this.getPeliculas();
  }


  getPeliculas(){
    this.servicios.getCartelera();
  }


  }

  // verPeli( idx:string){
  //   console.log(idx);
  // }


