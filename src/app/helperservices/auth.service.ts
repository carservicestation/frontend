import { Injectable, OnInit } from '@angular/core';
import { AuthDataService } from '../dataservices/authdata.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private authData: AuthDataService, private router: Router) { }

  dbuser: any;

  ValidateUser(user) {
    let obsRes = this.authData.Validate(user);

    obsRes.subscribe((result) => {

      this.dbuser = result;

      console.log("1")
      console.log(this.dbuser);
      console.log("2")
      if (this.dbuser.role == "ADMIN") {
        console.log("3")
        window.sessionStorage.setItem("isActive", "1");
        sessionStorage.setItem("user", JSON.stringify(this.dbuser));
        this.router.navigate(['/admin/console']);
        return true;
      }
      else if (this.dbuser.role == "OWNER") {
        console.log("4")
        window.sessionStorage.setItem("isActive", "2");
        sessionStorage.setItem("user", JSON.stringify(this.dbuser));
        this.router.navigate(['/owner/console']);
        return true;
      }
      else if (this.dbuser.role == "CUSTOMER") {
        window.sessionStorage.setItem("isActive", "3");
        sessionStorage.setItem("user", JSON.stringify(this.dbuser));
        this.router.navigate(['/customer/console']);
        return true;
      }
      else {
        this.router.navigate(['/signin']);
        return false;
      }
    })
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/signin']);
      return false;
    }
  }

  isLoggedIn() {
    if (
      window.sessionStorage.getItem("isActive") != null
      &&
      (
        window.sessionStorage.getItem("isActive") == "1" ||
        window.sessionStorage.getItem("isActive") == "2" ||
        window.sessionStorage.getItem("isActive") == "3"
      )
    ) {
      return true;
    }
    else {
      return false;
    }
  }

  get Role() {
    let lu:any = sessionStorage.getItem("user");
    lu = JSON.parse(lu);
    return lu.role;
  }

  get Id() {
    let lu:any = sessionStorage.getItem("user");
    lu = JSON.parse(lu);
    return lu.id;
  }

  Logout() {
    window.sessionStorage.setItem("isActive", "0");
    sessionStorage.removeItem("user");
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
}
