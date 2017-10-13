import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import QRCode from 'qrcode';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  code = 'some sample string';
  generated = '';

  displayQrCode() {
    return this.generated !== '';
  }

  constructor(public navCtrl: NavController) {

  }

  process() {
    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
    })
  }

}
