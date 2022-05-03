import { Injectable } from '@angular/core';
import { RouterModule, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService implements CanActivate {
  public allowloginPage = true;
  canActivate(ActivatedRouteSnapshot?, RouterStateSnapshot?) {
    console.log(ActivatedRouteSnapshot)
    console.log(RouterStateSnapshot)

    if (((ActivatedRouteSnapshot.routeConfig.path == 'login') && this.allowloginPage )
    ) {
      return true;
    }else{
      return false;
    }

  }
  constructor() { }
}
