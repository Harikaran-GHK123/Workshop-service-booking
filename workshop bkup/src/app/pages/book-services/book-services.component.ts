import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-book-services',
  templateUrl: './book-services.component.html',
  styleUrls: ['./book-services.component.scss']
})
export class BookServicesComponent implements OnInit {


  bookserviceform!: FormGroup;
  isuserregeister:boolean=false;



  constructor(
    private fb: FormBuilder,
    public userdata: UserdataService


  ) { }

  ngOnInit() {
    this.bookserviceform = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      shortly: ['', Validators.required],
      briefly: ['', Validators.required],
      text: ['', Validators.required],
      Upload: ['', Validators.required],
      token: [""],
      date:[""]
      
    },
    );
// THIS IS BOOK FORM 
    let isregeister = this.userdata.getuserdata();

    console.log("isregeister",isregeister);

    this.isuserregeister=this.isEmpty(isregeister);

    if (this.isuserregeister) {
      this.bookserviceform.get("first_name")?.setValue(isregeister.first_name);
      this.bookserviceform.get("last_name")?.setValue(isregeister.last_name);
    }

  }

  isEmpty(obj:object) {
    return Object.keys(obj).length !== 0;
  }

  // GET IMAGE FILE PATH
  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        // Update the form control with the file path
        this.bookserviceform.patchValue({
          Upload: reader.result
        });
      };
    }
  }

  getCurrentTimeAndDate() {
    const currentDate = new Date();
  
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
  
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    return formattedDate+" / "+formattedTime;
  }

  // token 
  generateRandomToken(length:number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }
    return token;
  }

  getbookservform() {
    this.bookserviceform.get("token")?.setValue(this.generateRandomToken(8));
    this.bookserviceform.get("date")?.setValue(this.getCurrentTimeAndDate());

    console.log(this.bookserviceform.value);
    let userdatafromform = this.bookserviceform.value;
    this.userdata.setbookservdata(userdatafromform);
    this.bookserviceform.reset();

  }




}
