import {_socialAccountData, parseSocialAccountsDataAndGetModels, SocialAccount} from './SocialAccount';
export class ContactPage {

  id: number;
  slug: string;
  brisbaneAddress: string;
  brisbaneImage: string;
  brisbanePhone: string;
  contentBody: string;
  nycAddress: string;
  nycImage: string;
  nycPhone: string;
  socialAccounts: SocialAccount[];

  constructor(id: number,
              slug: string,
              brisbaneAddress: string,
              brisbaneImage: string,
              brisbanePhone: string,
              contentBody: string,
              nycAddress: string,
              nycImage: string,
              nycPhone: string,
              socialAccounts: SocialAccount[]) {
    this.id = id;
    this.slug = slug;
    this.brisbaneAddress = brisbaneAddress;
    this.brisbaneImage = brisbaneImage;
    this.brisbanePhone = brisbanePhone;
    this.contentBody = contentBody;
    this.nycAddress = nycAddress;
    this.nycImage = nycImage;
    this.nycPhone = nycPhone;
    this.socialAccounts = socialAccounts;
  }

}

export type _contactPageData = {
  id: number,
  slug: string,
  acf: {
    brisbane_address: string,
    brisbane_image: string,
    brisbane_phone: string,
    content_body: string,
    nyc_address: string,
    nyc_image: string,
    nyc_phone: string,
    social_links: [
      {
        social_account: number
      }
    ]
  }
}

export function parseContactPageData(data: _contactPageData, socialAccounts: _socialAccountData[]): ContactPage {
  return new ContactPage(
    data.id,
    data.slug,
    data.acf.brisbane_address,
    data.acf.brisbane_image,
    data.acf.brisbane_phone,
    data.acf.content_body,
    data.acf.nyc_address,
    data.acf.nyc_image,
    data.acf.nyc_phone,
    parseSocialAccountsDataAndGetModels(socialAccounts, data.acf.social_links.map((socialAccount) => {
      return socialAccount.social_account;
    }))
  );
}