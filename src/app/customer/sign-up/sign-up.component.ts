import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/dataservices/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private cs:CustomerService, private router: Router) { }

  regId:any;

  ngOnInit() {
  }

  SignUp(registerForm)
  {
    let customer = registerForm.form.value;
    console.log(customer);
    let obsRes = this.cs.AddCustomer(customer);
    obsRes.subscribe((cust:any)=>{
      this.regId = cust.custId;
      this.router.navigate(["/signin"])
    })
  }
}
