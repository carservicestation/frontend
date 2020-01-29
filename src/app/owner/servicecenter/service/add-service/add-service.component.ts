import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/dataservices/service.service';
import { OwnerService } from 'src/app/dataservices/owner.service';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {


  fileData : File =null;

  s:Service = new Service();

  image:any;

  constructor(private ss:ServiceService, private os: OwnerService, private router: Router) { }

  ngOnInit() {
  }

  ImageFileSelected(f)
  {
    this.fileData = <File>f.target.files[0];
    this.s.image = this.fileData;

    this.image = <File>f.target.files[0];

    if(this.fileData.size == 0){
      window.alert("Empty file..")
    }

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
