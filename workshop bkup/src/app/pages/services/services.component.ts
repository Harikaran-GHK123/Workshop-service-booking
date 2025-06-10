import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{

  servicecollection:any[] = [];

  constructor(private userdata:UserdataService){}



  ngOnInit(){
    
    this.servicecollection = this.userdata.getserviceinfo();
  
  }
}
