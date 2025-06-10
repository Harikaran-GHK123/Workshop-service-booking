
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerform!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public userdata: UserdataService

  ) { }

  ngOnInit() {
    this.registerform = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    
   
    

  }


  getFormvalues() {
    console.log(this.registerform.value);

    let userdatafromform = this.registerform.value;
    this.userdata.setuserdata(userdatafromform);
    this.registerform.reset();
  }

}

