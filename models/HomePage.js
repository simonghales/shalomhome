export class HomePage {
  backgroundImage: string;
  siteSlogan: string;

  constructor(backgroundImage: string,
              siteSlogan: string,
              ) {
    this.backgroundImage = backgroundImage;
    this.siteSlogan = siteSlogan;
  }

}

export type _homeData = {
  acf: {
    background_image: {
      url: string
    },
    site_slogan: string
  },
  slug: string,
  title: {
    rendered: string
  }
}

export function parseHomeDataAndGetModel(data: _homeData) {

  const backgroundImage = data.acf.background_image.url;
  const siteSlogan = data.acf.site_slogan;

  return new HomePage(backgroundImage, siteSlogan);
}