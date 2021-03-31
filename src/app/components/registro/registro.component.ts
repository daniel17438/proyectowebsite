import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario={
    nombre: "",
    email: "",
    password1: "",
    password2: "",
    recordar: false
  };

  constructor( public auth: AuthService) {

   }


  ngOnInit(): void {

  }

  registrar( ){

    this.auth.register(  this.usuario.email, this.usuario.password1 ).then(data => {
      console.log(data);
    } )
    console.log ('formulario enviado');
    console.log(this.usuario);
  }

}
