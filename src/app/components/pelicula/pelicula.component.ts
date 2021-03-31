import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pasar: any;

  constructor( public router: Router) { }

  ngOnInit(): void {
  }
 verMas(i){
  //  this.router.navigateByUrl('buscador',this.pasar[i].id);
   this.router.navigate(['../buscador',this.pasar[i].id]);
 }
}
