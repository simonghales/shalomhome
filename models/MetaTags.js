export class MetaTags {
  pageTitle: string = 'Hydric Media - We’re app developers passionate about what we do.';
  pageDescription: string = 'We’re app developers passionate about what we do and who we work with. We specialise in developing mobile experiences that touch millions of people.';
  facebookTitle: string = 'Hydric Media - We’re app developers passionate about what we do.';
  facebookDescription: string = 'We’re app developers passionate about what we do and who we work with. We specialise in developing mobile experiences that touch millions of people.';
  facebookImage: string = '';
  twitterTitle: string = 'Hydric Media - We’re app developers passionate about what we do.';
  twitterDescription: string = 'We’re app developers passionate about what we do and who we work with. We specialise in developing mobile experiences that touch millions of people.';
  twitterImage: string = '';

  constructor(pageTitle?: string,
              pageDescription?: string,
              facebookTitle?: string,
              facebookDescription?: string,
              facebookImage?: string,
              twitterTitle?: string,
              twitterDescription?: string,
              twitterImage?: string,) {
    this.pageTitle = (pageTitle) ? pageTitle : this.pageTitle;
    this.pageDescription = (pageDescription) ? pageDescription : this.pageDescription;
    this.facebookTitle = (facebookTitle) ? facebookTitle : this.facebookTitle;
    this.facebookDescription = (facebookDescription) ? facebookDescription : this.facebookDescription;
    this.facebookImage = (facebookImage) ? facebookImage : this.facebookImage;
    this.twitterTitle = (twitterTitle) ? twitterTitle : this.twitterTitle;
    this.twitterDescription = (twitterDescription) ? twitterDescription : this.twitterDescription;
    this.twitterImage = (twitterImage) ? twitterImage : this.twitterImage;
  }

}

export type _pageMetaData = {
  acf?: {
    facebook_description_toggle?: boolean,
    facebook_description?: string,
    facebook_image?: boolean,
    facebook_title?: string,
    page_description?: string,
    page_title?: string,
    twitter_description_toggle?: boolean,
    twitter_description?: string,
    twitter_image_toggle?: boolean,
    twitter_image?: boolean,
    twitter_title_toggle?: boolean,
    twitter_title?: string
  }
}

export function parseMetaTagsData(data: _pageMetaData): MetaTags {
  let pageTitle: string = '';
  let pageDescription: string = '';
  let facebookTitle: string = '';
  let facebookDescription: string = '';
  let facebookImage: string = '';
  let twitterTitle: string = '';
  let twitterDescription: string = '';
  let twitterImage: string = '';
  if (data && data.acf) {
    const content = data.acf;
    pageTitle = content.page_title;
    pageDescription = content.page_description;
    facebookTitle = content.facebook_title;
    twitterTitle = (content.twitter_title_toggle) ? content.twitter_title : facebookTitle;
    facebookDescription = (content.facebook_description_toggle) ? pageDescription : content.facebook_description;
    twitterDescription = (content.twitter_description_toggle) ? facebookDescription : content.twitter_description;
  }
  return new MetaTags(
    pageTitle,
    pageDescription,
    facebookTitle,
    facebookDescription,
    facebookImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
  );
}