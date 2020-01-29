import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/helperservices/auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(private auth:AuthService) { }
  
  ngOnInit() {
    this.auth.Logout();
  }
}
