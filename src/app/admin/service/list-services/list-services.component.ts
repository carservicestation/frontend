import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/dataservices/service.service';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})
export class ListServicesComponent implements OnInit {

  services: any;

  constructor(private ss: ServiceService, 
              private router: Router) 
              { }

  ngOnInit()
  {
    let observableResult = this.ss.GetAllServices();
    observableResult.subscribe((result) => {
      console.log(result);
      this.services = result;
    });
  }

  DeleteService(sid)
  {
    let observableresult = this.ss.DeleteService(sid);
      observableresult.subscribe((result) => {
        console.log(result);
          this.router.navigate(['/listservices']);
      })
  }
}
