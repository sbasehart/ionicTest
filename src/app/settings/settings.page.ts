import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  toggleOn = false

  constructor(private storage: Storage, private alertController: AlertController, public toastController: ToastController) {
    
  }

  ngOnInit() {
    this.storage.get('toggle').then(disc => this.toggleOn = disc);
  }

  async onClearFavorites() {
    const alert = await this.alertController.create({
      header: 'Please confirm',
      message: 'Delete All Favorites?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Unfavorite cancelled');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.storage.remove('favorite')
            this.favoritesRemoved()
          }
        }
      ]
    });
    await alert.present();
  }

  async favoritesRemoved() {
    const toast = await this.toastController.create({
      message: `All Favorites Removed`,
      duration: 2000
    });
    toast.present();
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
      this.storage.set('toggle', JSON.stringify(this.toggleOn));
      this.storage.set('toggle', this.toggleOn);
    }
  }
}