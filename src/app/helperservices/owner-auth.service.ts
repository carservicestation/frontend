import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerAuthService implements CanActivate {

  constructor(private auth:AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.auth.Role === "OWNER")
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
