import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { OwnerService } from 'src/app/dataservices/owner.service';

@Component({
  selector: 'app-edit-owner-profile',
  templateUrl: './edit-owner-profile.component.html',
  styleUrls: ['./edit-owner-profile.component.css']
})
export class EditOwnerProfileComponent implements OnInit {

  constructor(private os: OwnerService) { }

  owner: Owner;

  ngOnInit() {
    let o = JSON.parse(sessionStorage.getItem("user"));
    let or = this.os.GetOwnerById(o.id);
    or.subscribe((r:any) => { this.owner = r })
  }

  UpdateOwner(){
    let or = this.os.UpdateOwner(this.owner);
    or.subscribe(r=>console.log(r))
  }
}
