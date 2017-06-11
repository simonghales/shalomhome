export class SocialAccount {

  id: number;
  slug: string;
  title: string;
  iconName: string;
  link: string;

  constructor(id: number,
              slug: string,
              title: string,
              iconName: string,
              link: string) {

    this.id = id;
    this.slug = slug;
    this.title = title;
    this.iconName = iconName;
    this.link = link;

  }

}

export type _socialAccountData = {
  id: number,
  slug: string,
  title: {
    rendered: string
  },
  acf: {
    icon_name: string,
    link: string
  }
}

export function parseSocialAccountsDataAndGetModels(data: _socialAccountData[], orderByIds?: number[]): SocialAccount[] {
  const socialAccounts = data.map((socialAccountData) => {
    return parseSocialAccountDataAndGetModel(socialAccountData);
  });
  if (orderByIds) {
    let sortedSocialAccounts = [];
    socialAccounts.forEach((socialAccount) => {
      sortedSocialAccounts[orderByIds.indexOf(socialAccount.id)] = socialAccount;
    });
    return sortedSocialAccounts;
  } else {
    return socialAccounts;
  }
}

export function parseSocialAccountDataAndGetModel(socialAccountData: _socialAccountData): SocialAccount {
  return new SocialAccount(socialAccountData.id, socialAccountData.slug, socialAccountData.title.rendered, socialAccountData.acf.icon_name, socialAccountData.acf.link);
}