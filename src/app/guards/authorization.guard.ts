import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const currentUser = this.authenticationService.userLogg;

    const currentUser= localStorage.getItem('usuario')?'au': null;

    if (currentUser=='au') {
      console.log('usuario autorizado');
      return true;
    }
    console.log('usuario sin autorizacion');
    this.router.navigate(['../inicio']);
    return false;
  }
  }
