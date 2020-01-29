import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/dataservices/service.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  service: any = { "serviceId": "", "name": "", "desc": "", "price": "" }

  constructor(private route: ActivatedRoute,
              private ds: ServiceService,
              private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result) => {

      let No = result.get("serviceId");
      console.log(No);

      let observableresult = this.ds.GetServiceById(No);

      observableresult.subscribe((result) => {

        this.service = result;

        console.log(this.service);
      })
    })
  }

  UpdateService() {
    let observableresult = this.ds.UpdateService(this.service);

    observableresult.subscribe((result) => {

      this.service = result;

      console.log(this.service);

      this.router.navigate(['/listservices']);
    })
  }
}