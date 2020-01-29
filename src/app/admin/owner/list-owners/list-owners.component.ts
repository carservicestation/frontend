import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/dataservices/owner.service';

@Component({
  selector: 'app-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.css']
})
export class ListOwnersComponent implements OnInit {
  No: any;
  owners: any;
  constructor(private os: OwnerService, 
              private router: Router) { }
  ngOnInit() {
    let observableResult = this.os.GetAllOwners();
    observableResult.subscribe((result) => {
      console.log(result);
      this.owners = result;
    });
  }

  DeleteOwner(oid) {
    let observableresult = this.os.DeleteOwner(oid);
    observableresult.subscribe((result) => {
      console.log(result);
      this.ngOnInit();
      this.router.navigate(['/admin/listowners']);
    })
  }
}
