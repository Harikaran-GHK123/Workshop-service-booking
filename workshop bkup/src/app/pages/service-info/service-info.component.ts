import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.scss']
})
export class ServiceInfoComponent implements OnInit {

  serviceinfo: any = {}


  constructor(private acrouter: ActivatedRoute, private userdata: UserdataService) { };
  ngOnInit(): void {


    let serviceinfo = this.userdata.getserviceinfo();
    


    this.acrouter.paramMap.subscribe(params => {
      let urlparam = params.get("info");

      for (let service of serviceinfo) {
        // console.log(service.param == urlparam);
        if (service.param == urlparam) {
          
          this.serviceinfo=service;
          console.log(this.serviceinfo);
          
        }



      }



    });
  }

}
