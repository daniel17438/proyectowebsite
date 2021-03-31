import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loading: boolean = false;

  public userLogg= true;

  constructor( public afAuth: AngularFireAuth, public router: Router ) {
      // con esto recibimos e usuraio que hemos registrado

      this.afAuth.authState.subscribe(user => {
        console.log(user);
        if (!user) {
          this.userLogg = false;
          return;

        }
        this.userLogg = true;
        // this.persona.nombre = user.email;
        // this.persona.uid = user.uid;
      }, error => {
        console.log(error);
      });
   }


logout() {
  this.confirmarSalida();
  }

confirmarSalida() {
  Swal.fire({
    position: 'center',
    icon: 'warning',
    title: 'Seguro desea cerrar sesión?..',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si',
  }).then((result) => {
    if (result.value) {
      this.afAuth.signOut();
      this.userLogg= null;
      localStorage.removeItem('usuario');
      this.router.navigateByUrl('/inicio');
    }
  });
}


 login(mail: string, password: string) {
  return this.afAuth.signInWithEmailAndPassword(mail, password);
 }

 public register(mail: string, password: string) {

  return this.afAuth.createUserWithEmailAndPassword(mail, password);
}
}
