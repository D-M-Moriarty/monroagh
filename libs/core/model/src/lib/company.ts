export interface ICompany {
  name: string;
  address: {
    addressOne: string;
    addressTwo: string;
    addressThree: string;
    postcode: string;
    country: string;
    county: string;
  };
  users: [
    {
      name: string;
      sex: string;
    }
  ];
}
