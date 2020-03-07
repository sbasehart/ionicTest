// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { AuthenticationService } from './../../services/authentication.service';
// @Component({
// selector: 'app-login',
// templateUrl: './login.page.html',
// styleUrls: ['./login.page.scss'],
// })
// export class LoginPage implements OnInit {
//   email: string;
//   password: string;

//   constructor(
//     private authService: AuthenticationService,
//     public router: Router
//   ) { }

//   ngOnInit() {
//   }

//   login() {
//     this.authService.login(this.email, this.password);
//     this.email = null;
//     this.password = null;
//     this.goHome();
//   }

//
// }

import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
import { isError } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  loading: LoadingController
  password = '';
  email = ''

  constructor(
    private auth: AuthenticationService,
    private alertCtrl: AlertController,
    public router: Router
  ) { }

  public login() {
    this.auth.login(this.email, this.password),
      this.email = null;
      this.password = null;
      this.goHome();
    if (isError) {
      this.presentAlert()
    }
  }

  goHome() {
    this.router.navigateByUrl('tabs/location');
  }

  async presentAlert() {
    let alert = await this.alertCtrl.create({
      message: 'Failure',
      subHeader: 'Incorrect Login',
      buttons: ['Dismiss']
    });
    await alert.present();
  }
}
