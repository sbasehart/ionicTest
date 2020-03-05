import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
@Component({
selector: 'app-login',
templateUrl: './login.page.html',
styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService,
    public router: Router
  ) { }
  
  ngOnInit() {
  }
  
  login() {
    this.authService.login(this.email, this.password);
    this.email = null;
    this.password = null;
    this.goHome();
  }

  goHome() {
    this.router.navigateByUrl( 'tabs/location' );
  }
}
