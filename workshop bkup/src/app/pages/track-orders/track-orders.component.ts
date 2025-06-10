import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';


@Component({
  selector: 'app-track-orders',
  templateUrl: './track-orders.component.html',
  styleUrls: ['./track-orders.component.scss']
})
export class TrackOrdersComponent implements OnInit {


  trackorder: any[] = []

  constructor(
    public userdata: UserdataService
  ){

    
  }



  ngOnInit(): void {

    this.trackorder= this.userdata.getbookserviecedata()
  
  }


}

