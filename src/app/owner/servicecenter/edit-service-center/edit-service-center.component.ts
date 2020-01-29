import { Component, OnInit } from '@angular/core';
import { ServiceCenterService } from 'src/app/dataservices/servicecenter.service';
import { ServiceCenter } from 'src/app/models/service-center';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-service-center',
  templateUrl: './edit-service-center.component.html',
  styleUrls: ['./edit-service-center.component.css']
})
export class EditServiceCenterComponent implements OnInit {

  servicecenter: ServiceCenter;

  constructor(private sc: ServiceCenterService,
              private router: Router) { }

  ngOnInit() {
    let o = JSON.parse(sessionStorage.getItem("user"));
    let observableresult = this.sc.GetServiceCenterByOwnerId(o.id);
    observableresult.subscribe((result: any) => {
      this.servicecenter = result;
      console.log(this.servicecenter);
    })
  }

  UpdateServiceCenter() {
    let observableresult = this.sc.UpdateServiceCenter(this.servicecenter);
    observableresult.subscribe((result) => {
      console.log(result);
      this.router.navigate(['/owner/console']);
    })
  }

  // ngOnInit() {
  //   this.route.paramMap.subscribe((result) => {
  //     let No = result.get("id");
  //     console.log(No);
  //     let observableresult = this.sc.getServiceCenterById(No);
  //     observableresult.subscribe((result) => {
  //       this.servicecenter = result;
  //       console.log(this.servicecenter);
  //     })
  //   })
  // }
}
