import { Component, OnInit } from '@angular/core';
import { ServiceCenterService } from 'src/app/dataservices/servicecenter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-service-centers',
  templateUrl: './list-service-centers.component.html',
  styleUrls: ['./list-service-centers.component.css']
})
export class ListServiceCentersComponent implements OnInit {

  centers:any;

  constructor(private sc:ServiceCenterService,
              private router:Router) { }

  ngOnInit() {
    let observableResult=  this.sc.GetAllCenters();
    observableResult.subscribe((result)=>{
    console.log(result);
    this.centers = result;
  });
}

DeleteServiceCenter(scid)
  {
    let observableresult = this.sc.DeleteServiceCenter(scid);
      observableresult.subscribe((result) => {
        console.log(result);
        this.ngOnInit();
        this.router.navigate(['/admin/listcenters']);
      })
  }
}
