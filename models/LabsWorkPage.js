import {_featuredProjectData, parseFeaturedProjectsDataAndGetProjects, Project} from './Project';
export class LabsWorkPage {

  id: number;
  slug: string;
  contentBody: string;
  featuredProjects: Project[];

  constructor(id: number,
              slug: string,
              contentBody: string,
              featuredProjects: Project[],) {
    this.id = id;
    this.slug = slug;
    this.contentBody = contentBody;
    this.featuredProjects = featuredProjects;
  }

}

export type _labsWorkPageData = {
  id: number,
  slug: string,
  acf: {
    content_body: string,
    featured_projects: [{
      featured_project: number
    }],
  }
}

export function parseLabsWorkPageData(data: _labsWorkPageData, featuredProjectsData: _featuredProjectData[]): LabsWorkPage {
  const featuredProjectsIds = data.acf.featured_projects.map((project) => {
    return project.featured_project;
  });
  const featuredProjects = parseFeaturedProjectsDataAndGetProjects(featuredProjectsData.filter((projectData) => {
    return featuredProjectsIds.includes(projectData.id);
  }), featuredProjectsIds);
  return new LabsWorkPage(
    data.id,
    data.slug,
    data.acf.content_body,
    featuredProjects,
  );
}