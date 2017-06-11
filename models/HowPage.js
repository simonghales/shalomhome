export class HowPage {

  id: number;
  slug: string;
  bodyContent: string;
  fullImage: string;
  mainHeading: string;
  steps: _stepObject[];

  constructor(id: number,
              slug: string,
              bodyContent: string,
              fullImage: string,
              mainHeading: string,
              steps: _stepObject[]
  ) {
    this.id = id;
    this.slug = slug;
    this.bodyContent = bodyContent;
    this.fullImage = fullImage;
    this.mainHeading = mainHeading;
    this.steps = steps;
  }

}

export type _stepObject = {
  content: string,
  title: string
}

export type _howPageData = {
  id: number,
  slug: string,
  acf: {
    body_content: string,
    full_image: string,
    main_heading: string,
    steps: [
      {
        step_content: string,
        step_label: string
      }
    ]
  }
}

export function parseHowPageData(howPageData: _howPageData): HowPage {
  return new HowPage(
    howPageData.id,
    howPageData.slug,
    howPageData.acf.body_content,
    howPageData.acf.full_image,
    howPageData.acf.main_heading,
    howPageData.acf.steps.map((step) => {
      return {
        content: step.step_content,
        title: step.step_label
      };
    })
  );
}