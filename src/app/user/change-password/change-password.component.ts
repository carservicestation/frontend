import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthDataService } from 'src/app/dataservices/authdata.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  user: User;
  cu: User;
  newPassword: string;
  newPassword1: string;

  constructor(private auth: AuthDataService) {
    this.user = new User();
    this.cu = new User();
    this.newPassword = "";
    this.newPassword1 = "";
  }

  ngOnInit() {
    let u: any = JSON.parse(sessionStorage.getItem("user"))
    if (u != undefined) {
      if (u.role != "ADMIN") {
        this.cu.id = u.user.id;
        this.cu.email = u.email;
        this.cu.role = u.role;
        this.user = this.cu;
      }
      else {
        this.user = u;
        this.user.password = "";
      }
    }
  }

  ChangePassword() {
    let or = this.auth.ChangePassword(this.user, this.newPassword);
    or.subscribe((r) => {
      console.log(r)
      sessionStorage.setItem("user", JSON.stringify(r))
      this.ngOnInit();
    })
  }
}
