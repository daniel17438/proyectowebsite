import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(pelicula: any, mostrar2: boolean = false): any {


    // repasar

    const url = 'http://image.tmdb.org/t/p/w300';
    if (mostrar2) {
      if (pelicula.backdrop_path !== null) {
        return url + pelicula.backdrop_path;
    } else {
      return 'assets/img/sinImagen.jpg';
    }
  }
    if (pelicula.backdrop_path !== null) {
      return url + pelicula.backdrop_path;
    } else if (pelicula.poster_path !== null) {
      return url + pelicula.poster_path;
    } else {
      return 'assets/img/sinImagen.jpg';
    }





  }}

