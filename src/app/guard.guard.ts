import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './service/authi.service';
@Injectable({
  providedIn: 'root'
})
export class guard implements CanActivate {

  constructor(private authServ: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authServ.testerAdmin()) {
      return true;
    } else {
      this.router.navigate(['/not-accese']);
      return false;
    }
  }
}