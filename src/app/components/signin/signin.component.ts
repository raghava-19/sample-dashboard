import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public userForm: FormGroup;
  constructor(private formbuilder: FormBuilder,private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(){
    this.userForm = this.formbuilder.group({
      fullname:['',Validators.required,Validators.maxLength(25)],
      usermail:['',Validators.required,Validators.email],
      phonenumber:['',Validators.required,Validators.minLength(10),Validators.maxLength(10)],
      passcode:['',Validators.required]
    })
  }

  public SubmitUserSignup(){
    console.table(this.userForm.value)
    this.http.post<any>('http://localhost:3000/newusers',this.userForm.value)
    .subscribe(response =>{
      alert('signup successful');
      this.userForm.reset();
      this.router.navigate(['/login']);
    },
    err =>{
      alert('please try again');
    })
  }

}
