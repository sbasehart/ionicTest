import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  prefersDarkOn: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    public menuCtrl: MenuController,
    public router: Router,
    private storage: Storage
  ) {
    this.checktoggle()
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
  }

  checktoggle() {
    this.storage.get('disclaimer').then((val) => {
      if (val = true) {
        this.prefersDarkOn = true
        this.darkToggle()
        console.log("dark mode")
      } else {
        this.prefersDarkOn = false
        console.log("no dark mode")
      }
    })
  }

  logout() {
    this.authService.logout();
    this.menuCtrl.close('mainMenu');
    this.goHome();
  }
  
  goHome() {
    this.router.navigateByUrl( 'login' );
  }


  darkToggle() {
    // Use matchMedia to check the user preference
    const toggle = document.querySelector('#themeToggle') as HTMLIonToggleElement;

    // Listen for the toggle check/uncheck to toggle the dark class on the <body>
    toggle.addEventListener('ionChange', (ev) => {
      document.body.classList.toggle('dark', (<any>ev).detail.checked);
    });

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((e) => checkToggle(e.matches));

    // Called by the media query to check/uncheck the toggle
    function checkToggle(shouldCheck) {
      toggle.checked = shouldCheck;
      this.prefersDarkOn = !this.prefersDarkOn;

    }
    this.storage.set('disclaimer', JSON.stringify(this.prefersDarkOn));//save true
    this.storage.set('disclaimer', this.prefersDarkOn);
  }

  
}
