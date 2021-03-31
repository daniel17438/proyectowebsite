import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

password: boolean;

  usuarioRegistro={
    nombre: "",
    email: "",
    password1: "",
    password2: "",
    recordar: false
  };


  bienvenido = true;
  login= false;
  registro= false;

  formG: FormGroup;
  usuario: UsuarioModel = new UsuarioModel('', '', '');
  loading = false;
  hide = true;

  constructor(public formB: FormBuilder,
              public auth: AuthService,

              public router: Router
             ) { }

  ngOnInit() {
    this.buildForm();
  }


  buildForm() {
    this.formG = this.formB.group({
      correo: [null, Validators.required],
      pws: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.auth.loading = true;
    this.usuario.correo = this.formG.value.correo;
    this.usuario.password = this.formG.value.pws;
    this.auth.login(this.usuario.correo, this.usuario.password).then((user: any) => {
      this.auth.loading = false;
        this.auth.userLogg= true;
        localStorage.setItem( 'usuario', 'logue' );

        this.messageSuccess();
        this.router.navigateByUrl('/cartelera');
        // this.auth.saveStorage(user.user.uid);
        }).catch(error => {
      this.auth.loading = false;
      this.messageError();
      return;
    });
  }

  abrirModal() {
    // const ipAPI = '//api.ipify.org?format=json';
    // const inputValue = fetch(ipAPI)
    //   .then(response => response.json())
    //   .then(data => data.ip);

    // Swal.fire({
    //   title: 'Introduce tu correo',
    //   input: 'text',
    //   inputValue: inputValue,
    //   showCancelButton: true,
    // }
    // ).then((result) => {
    //   if (result.value) {
    //     this.loading = true;
    //     this.auth.restablecerPassword(result.value).then((user: any) => {
    //       this.loading = false;
    //       Swal.fire({
    //         icon: 'success',
    //         title: 'Se a enviado un enlace para cambiar contraseña..',
    //         text: 'Por favor verifique',
    //       });
    //     }).catch(error => {
    //       this.loading = false;
    //       console.log(error);
    //       Swal.fire({
    //         icon: 'error',
    //         title: error.code,
    //         text: 'Por favor verifique',
    //       });
    //     });
    //   }
    // });
  }

messageSuccess() {
  Swal.fire({
    icon: 'success',
    title: 'Bienvenido',
    text: 'Busca tu pelicula favorita!!',
    timer: 3000,
  });
}

messageError() {
  Swal.fire({
    icon: 'error',
    title: 'Usuario o contraseña incorrecta..!',
    text: 'Por favor verifique',
  });
}

registrar( ){

  this.validarPassword();
  if (this.password) {
     return;
  }
  this.auth.loading = true;

  this.auth.register(  this.usuarioRegistro.email , this.usuarioRegistro.password1 ).then(data => {
    this.auth.loading = false;
    console.log(data);
    this.auth.userLogg= true;
    this.router.navigateByUrl("/cartelera");
  } ).catch(error => {
    this.auth.loading = false;

    Swal.fire({
      icon: 'error',
      title: error.message,
      text: 'Por favor verifique',
    });
    return;

  });


  console.log ('formulario enviado');
  console.log(this.usuario);
}

validarPassword() {
  this.password = false;
  const pws1 = this.usuarioRegistro.password1;
  const pws2 = this.usuarioRegistro.password2;

  if (pws1 !== pws2) {
    Swal.fire({
      icon: 'error',
      title: 'Las contraseñas no coinciden',
      text: 'Intentalo de nuevo',
    });
    this.password = true;
    console.log('no consinciden');
  } else {
    this.password = false;
    console.log('son iguales');
  }
}

validarCampo( campo ){
  let input=campo;
console.log( this.usuarioRegistro+"."+input)
}
}


