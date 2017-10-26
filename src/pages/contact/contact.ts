import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { AppVersion } from '@ionic-native/app-version';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [ FileTransfer,
               File,
               FileOpener,
               AppVersion
            ]
})
export class ContactPage {
  updating = false;

  fileTransfer: FileTransferObject = this.transfer.create();

  constructor(public navCtrl: NavController,
              private transfer: FileTransfer,
              private file: File,
              public alertCtrl: AlertController,
              public http: Http,
              private fileOpener: FileOpener,
              private appVersion: AppVersion) {

  }

  checkForUpdates() {
    this.http.get('https://tripally.co/tripally-demo.json')
      .map(res => res.json())
      .subscribe(data => {
        this.appVersion.getVersionNumber().then((s) => {
          if (data.version.toString() > s.toString()) {
            this.showConfirm();
          } else {
            this.showAlert();
          }
        });
      });
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Updates available',
      message: 'Do you agree to download and install newest TripAlly Demo application?',
      buttons: [
        {
          text: 'No, later',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes, install',
          handler: () => {
            this.downloadApp();
          }
        }
      ]
    });
    confirm.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'No updates',
      subTitle: 'There are no updates currently available',
      buttons: ['OK']
    });
    alert.present();
  }

  downloadApp() {
    const url = 'https://tripally.co/tripally-demo.apk';

    this.updating = true;
    this.fileTransfer.download(url, this.file.externalDataDirectory + 'tripally-demo.apk')
      .then((entry) => {
        this.updating = false;
        this.installApp(entry);
      }, (error) => {
        console.error(error);
      });
  }

  installApp(entry) {
    this.fileOpener.open(
      entry.toURL(),
      'application/vnd.android.package-archive'
    );
  }

}
