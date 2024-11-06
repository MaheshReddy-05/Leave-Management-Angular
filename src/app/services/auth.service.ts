import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const email = localStorage.getItem('userEmail');
        
        if (email) {
          const sessionExpiration = localStorage.getItem('sessionExpiration');
          if (sessionExpiration && new Date().getTime() > +sessionExpiration)
            return false;
          else
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
  }
}
