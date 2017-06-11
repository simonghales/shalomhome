export class WhoPage {

  id: number;
  slug: string;
  bodyContent: string;
  missionStatement: string;

  constructor(id: number,
              slug: string,
              bodyContent: string,
              missionStatement: string,) {
    this.id = id;
    this.slug = slug;
    this.bodyContent = bodyContent;
    this.missionStatement = missionStatement;
  }

}

export type _whoPageData = {
  id: number,
  slug: string,
  acf: {
    body_content: string,
    mission_statement: string
  }
}

export function parseWhoPageData(whoPageData: _whoPageData): WhoPage {
  return new WhoPage(
    whoPageData.id,
    whoPageData.slug,
    whoPageData.acf.body_content,
    whoPageData.acf.mission_statement,
  );
}