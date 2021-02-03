import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
  phoneNumbers: any = [];
  callerID = '01';
  completed = false;
  i = 0;
  file: any;
  recentprefix = 5;
  constructor() { }

  text = '';
  ngOnInit() {
    this.generateAllHandyNumbers();
  }

  generateAllHandyNumbers() {
    // for (let allNumbers = 0; allNumbers < Math.pow(11, 11); allNumbers++) {

    // for (let allNumbers = 0; allNumbers < 2; allNumbers++) {
    this.callerID = '01' + this.recentprefix.toString();
    this.addCiffer();
    console.log('numberscount:' + this.i);
    this.recentprefix++;

    // }
    this.prepareDownload();
  }
  addCiffer() {
    const ciffer: any = [];
    this.i = 0;
    // for (ciffer = 0; ciffer < 10; ciffer++) {
    //   for (ciffer = 0; ciffer < 10; ciffer++) {
    for (ciffer[0] = 0; ciffer[0] < 10; ciffer[0]++) {
      console.log('id:' + this.i + 'handys : ' + this.phoneNumbers.length, this.phoneNumbers);
      for (ciffer[1] = 0; ciffer[1] < 10; ciffer[1]++) {
        for (ciffer[2] = 0; ciffer[2] < 10; ciffer[2]++) {
          for (ciffer[3] = 0; ciffer[3] < 10; ciffer[3]++) {
            for (ciffer[4] = 0; ciffer[4] < 10; ciffer[4]++) {
              for (ciffer[5] = 0; ciffer[5] < 10; ciffer[5]++) {
                for (ciffer[6] = 0; ciffer[6] < 10; ciffer[6]++) {
                  for (ciffer[7] = 0; ciffer[7] < 10; ciffer[7]++) {
                    for (ciffer[8] = 0; ciffer[8] < 10; ciffer[8]++) {
                      // for (ciffer[9] = 0; ciffer[9] < 10; ciffer[9]++) {
                      this.i++;
                      // tslint:disable-next-line:max-line-length
                      const handyNummber = this.callerID + ciffer[0].toString() + ciffer[1].toString() + ciffer[2].toString() + ciffer[3].toString() + ciffer[4].toString() + ciffer[5].toString() + ciffer[6].toString() + ciffer[7].toString() + ciffer[8].toString(); // + ciffer[9].toString();
                      this.phoneNumbers.push(handyNummber);
                      // console.log('id:' + this.i + 'handyNummber : ' + handyNummber);

                      // }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  prepareDownload(size = 300000) {
    this.completed = true;
    let text = '';
    console.log(this.phoneNumbers.length);
    const part = size / this.phoneNumbers.length;
    for (let entry = 0; entry < this.phoneNumbers.length + 1; entry++) {
      const phoneNumber = this.phoneNumbers[entry];
      // tslint:disable-next-line:max-line-length
      text = text + 'BEGIN:VCARD  VERSION:3.0  PRODID:-//Apple Inc.//macOS 11.1//EN  N:ALIEN-UNKNOWN;ALIEN;;;  FN:ALIEN ALIEN-UNKNOWN  TEL;type=CELL;type=VOICE;type=pref:' + phoneNumber + "END:VCARD  ";
      if (!(entry / size).toString().includes('.')) {
        console.log(text);
        this.file.push(text);
        this.download('Bluepage_' + entry + '.vcf', text);
      }
    }

  }
  download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }


  exportNumberstoCSV() {

  }
}
