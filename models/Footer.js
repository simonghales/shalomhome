
export class Footer {

  nycLocation: string;
  nycNumber: string;
  brisbaneLocation: string;
  brisbaneNumber: string;
  socialAccountIds: number[];

  constructor(
    nycLocation: string,
    nycNumber: string,
    brisbaneLocation: string,
    brisbaneNumber: string,
    socialAccountIds: []
  ) {
    this.nycLocation = nycLocation;
    this.nycNumber = nycNumber;
    this.brisbaneLocation = brisbaneLocation;
    this.brisbaneNumber = brisbaneNumber;
    this.socialAccountIds = socialAccountIds;
  }

}

export type _footerData = {
  acf: {
    brisbane_location: string,
    brisbane_number: string,
    new_york_location: string,
    new_york_number: string,
    social_accounts: [
      {
        social_account: number
      }
    ]
  }
}

export function parseFooterDataAndGetModel(footerData: _footerData): Footer {
  return new Footer(
    footerData.acf.new_york_location,
    footerData.acf.new_york_number,
    footerData.acf.brisbane_location,
    footerData.acf.brisbane_number,
    footerData.acf.social_accounts.map((account) => {
      return account.social_account;
    })
  );
}