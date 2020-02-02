import { Component, OnInit, } from '@angular/core';
import { AuthService } from './helperservices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'frontend';
  m:boolean;
  constructor(public auth:AuthService, private router:Router){ 
  }

  ToConsole(){
    let r = this.auth.Role;
    if(r=="ADMIN")
    {
      this.router.navigate(['/admin/console']);
    }
    else if(r=="OWNER")
    {
      this.router.navigate(['/owner/console']);
    }
    else if(r=="CUSTOMER")
    {
      this.router.navigate(['/customer/console']);
    }
  }

  ngOnInit(): void {

 }
}
