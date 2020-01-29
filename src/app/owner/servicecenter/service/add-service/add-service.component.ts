import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/dataservices/service.service';
import { OwnerService } from 'src/app/dataservices/owner.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  image:any;

  constructor(private ss:ServiceService, private os: OwnerService, private router: Router) { }

  ngOnInit() {

    let id ;

    // let obsRes =  this.os.GetOwnerByNo(id);

    // obsRes.subscribe((result)=>{

    //   console.log(result);

    // })
   
  }
  ImageFileSelected(image)
  {
    this.image = image;
  }

  AddService(serForm)
  {
    let service = serForm.form.value;
    console.log(service);

    let obsRes = this.ss.AddService(service, this.image);

    obsRes.subscribe((result)=>{

      console.log(result);

    })

  //this.router.navigate(["/selectcenter"])

  }
  

}
