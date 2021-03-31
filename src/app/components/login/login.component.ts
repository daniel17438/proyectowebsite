import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario={
    email: "",
    password: ""
   };

  constructor( public auth:AuthService ) { }

  ngOnInit(): void {
  }
 login(){
  this.auth.login( this.usuario.email, this.usuario.password).then(data => {
    console.log(data);
  }).catch(error=>{
    console.log(error);
  })
 console.log(this.usuario);
 }
}
