import { AuthService } from './../auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PixelKitModule } from 'pixel-kit';
import * as _ from 'lodash';


// const APP: any = window['APP'];
declare var Encrypter;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
})
export class LoginComponent implements OnInit {
  // public image = APP.img_url + 'logo.png';
  // public microsoftImage = APP.img_url + 'microsoft.svg';
  // public url = APP.api_url;
  // public backgroundImg = APP.img_url + 'background.png';
  // public emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  public emailPattern = /^\w+(\.\w+)*@[a-zA-Z]+\.[a-zA-Z]{2,6}$/;
  public loginForm: FormGroup;
  public error: any;
  public remember: any;
  public signInSpnr = false;
  public state = {
    submitted: false,
    loginDetails: [
      {
        name: 'email',
        type: 'email',
        required: true,
        label: 'Email Address',
        value: ''
      },
      {
        name: 'password',
        type: 'password',
        required: true,
        label: 'Password',
        value: ''
      }
    ]
  };
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    
  ) {}

  ngOnInit() {
    this.createForm();
    // console.log(this.loginForm)
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
      remember: ''
    });
    // this.checkCookie();
  }

 

  submit(form) {
    console.log(form)
    this.state.submitted = true;

    if(form.valid && (form.value.email == 'rajender0887@gmail.com' && form.value.password == '123456')) {
      this.authService.allowLogin = true;
      this.router.navigate(['/home'])

    } else {
      this.authService.allowLogin = false;
    }
  // this.router.navigate(['home'])
    
    return
    var rsaEncrypter = new Encrypter(
      'BD20872ADB5595CCC9EC9060FC7B588243236358387C841912BE5E70EEE61D9CC5A8F21D52489CC26793A3EB2A87E3BD5A0150DBEF8B07C1D423F4B94626166FD2BBE9EB41DBD712D7A492E582A5DC39DD5BF474198E092D15E32D663DF4AF64C86150EDA22AB6D121CF18A158A12F8D18E180BE3C0CA32A19111934EB54B835767BCA25A42C33613837FDDF0A32D258332A5D14A563399CBA79206B5EE5F78DE1A3368ECEA4CFBD024F1DEF57E46E81183B177B1A83AF96A417EBB8C3A75C4CD005B0C73E7E355D7B800C6C06AF154AE8A9D72F0B5F98A46756FB126956AF86A14EAD85E1706E4F9A65F3AB58D34462031C9020EF13410B070216720A47C773',
      '10001'
    );
    this.state.submitted = true;
    if (form.valid) {
     
    }
  }

  // getLoginSsoUrl() {
  //   window.location.href = this.url + 'getLoginSsoUrl';
  // }

  valuechange(e) {
    this.error = '';
  }
}
