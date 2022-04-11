import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm()
  }
  private createForm(){
    this.loginForm = this.formbuilder.group({
      usermail:['',Validators.required],
      passcode:['',Validators.required]
    })
  }

  public logIn(){
    this.http.get<any>('http://localhost:3000/newusers').subscribe(
      res =>{
        //will get the userslist then find the User
        let user = res.find((T:any)=>{
          return T.usermail === this.loginForm.value.usermail &&
          T.passcode === this.loginForm.value.passcode
        })
        if(user){
          this.loginForm.reset();
          this.router.navigate(['/gamingdashboard']);
        } else{
          alert('úser not found');
        }
      },
      err =>{
        alert('please try again');
      }
    )
  }
}
