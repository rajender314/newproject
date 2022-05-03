import { Injectable } from '@angular/core';
import { RouterModule, CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  public allowLogin = false;
  
  canActivate(ActivatedRouteSnapshot?, RouterStateSnapshot?) {
    console.log(ActivatedRouteSnapshot)
    console.log(RouterStateSnapshot)

    if (((ActivatedRouteSnapshot.routeConfig.path == 'home') && this.allowLogin )
    ) {
      return true;
    }else{
      return false;
    }

  }
  constructor(private _router: Router) { }
}
