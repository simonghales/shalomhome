export class WhatPage {

  id: number;
  slug: string;
  bodyContent: string;
  code: _codeObject[];
  fullImage: string;
  creativeText: string;
  strategyText: string;
  technologyText: string;
  services: _serviceObject[];

  constructor(id: number,
              slug: string,
              bodyContent: string,
              code: _codeObject[],
              fullImage: string,
              creativeText: string,
              strategyText: string,
              technologyText: string,
              services: _serviceObject[],) {
    this.id = id;
    this.slug = slug;
    this.bodyContent = bodyContent;
    this.code = code;
    this.fullImage = fullImage;
    this.creativeText = creativeText;
    this.strategyText = strategyText;
    this.technologyText = technologyText;
    this.services = services;
  }

}

export type _codeObject = {
  imageSlug: string,
  label: string
}

export type _serviceObject = {
  description: string,
  links: string,
  title: string
}

export type _whatPageData = {
  id: number,
  slug: string,
  acf: {
    body_content: string,
    code: [
      {
        code_image_slug: string,
        code_label: string
      }
      ],
    full_image: string,
    creative_text: string,
    strategy_text: string,
    technology_text: string,
    services: {
      service_description: string,
      service_links: string,
      service_title: string
    }
  }
}

export function parseWhatPageData(whatPageData: _whatPageData): WhatPage {
  return new WhatPage(
    whatPageData.id,
    whatPageData.slug,
    whatPageData.acf.body_content,
    whatPageData.acf.code.map((code) => {
      return {
        imageSlug: code.code_image_slug,
        label: code.code_label
      }
    }),
    whatPageData.acf.full_image,
    whatPageData.acf.creative_text,
    whatPageData.acf.strategy_text,
    whatPageData.acf.technology_text,
    whatPageData.acf.services.map((service) => {
      return {
        description: service.service_description,
        links: service.service_links,
        title: service.service_title,
      }
    })
  );
}