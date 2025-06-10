import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserdataService } from 'src/app/services/userdata.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  contactform!: FormGroup;
  servicedata :any[]=[]


  constructor(
    private fb: FormBuilder,
    private userdata: UserdataService

  ) { }

  ngOnInit() {
    this.contactform = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['',[Validators.required,Validators.email]],
      messages: ['', Validators.required],
    },
    );

    this.servicedata = this.userdata.getserviceinfo()

  }


  getFormvalues() {
    console.log(this.contactform.value);

  }




}


