import { Component } from '@angular/core';
import { ICompany } from '@monroagh/core/model';
import { DateUtils } from '@monroagh/shared';

@Component({
  selector: 'monroagh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a-app';

  doSomething() {
    const timestamp = '1551830399000';
    const date = DateUtils.parse(timestamp);
  }

  makeCompany() {
    const c: ICompany = {
      name: 'next company',
      address: {
        addressOne: '',
        addressTwo: '',
        addressThree: '',
        postcode: '',
        country: ''
      },
      users: [
        {
          name: 'Bob', 
          sex: 'yes'
        }
      ]
    }
    console.log(c);
  }
}
