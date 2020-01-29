import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/dataservices/owner.service';

@Component({
  selector: 'app-sign-up-owner',
  templateUrl: './sign-up-owner.component.html',
  styleUrls: ['./sign-up-owner.component.css']
})
export class SignUpOwnerComponent implements OnInit {

  constructor(private os: OwnerService,private router: Router) { }

  regId:any;
  ngOnInit() {
  }
  SignUpOwner(regFormO)
  {
    let owner = regFormO.form.value;
    console.log(owner);
    let obsRes = this.os.AddOwner(owner);
    obsRes.subscribe((owner:any)=>{
      console.log(owner);
      this.regId = owner.id;
    })
  this.router.navigate(["/signin"])
  }
}
