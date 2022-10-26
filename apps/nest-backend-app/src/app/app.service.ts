import { ICompany } from '@monroagh/core/model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): ICompany {
    return {
      name: 'requested company',
      address: {
        addressOne: '',
        addressTwo: '',
        addressThree: '',
        postcode: '',
        country: ''
      },
      users: null
    };
  }
}
