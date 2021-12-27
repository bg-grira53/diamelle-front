import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
err :any ;
loading = false ;
returnUrl : string ;
  loginForm: FormGroup;
  constructor(private _myservice: AuthService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

  }

  ngOnInit() {
    this.returnUrl = this._activatedRoute.snapshot.queryParams['returnUrl'] || '/main/';

  }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login() {


    if (this.loginForm.valid) {
      this.loading =true ;
      this._myservice.login(this.loginForm.value)
        .subscribe(
          
          (data : any) => {
           
            localStorage.setItem('token', data.token);
           
            this._router.navigate([this.returnUrl]);
          },
          error => { 

this.err = error.toString() ;
console.log(error);
this.loading = false ;


           }
        );
    }
  }

 
}
