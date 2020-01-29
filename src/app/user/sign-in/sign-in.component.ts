import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/helperservices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  SignIn(loginForm) {
    let user = loginForm.form.value;
    this.auth.ValidateUser(user);
  }

  GoSignUp() {
    this.router.navigate(['/signup']);
  }
}






