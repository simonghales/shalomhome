import {_featuredProjectData, parseFeaturedProjectsDataAndGetProjects, Project} from './Project';
export class MusicWorkPage {

  id: number;
  slug: string;
  contentBody: string;
  featuredImage: string;
  featuredProjects: Project[];
  pastProjects: Project[];
  pastProjectsIntro: string;

  constructor(id: number,
              slug: string,
              contentBody: string,
              featuredImage: string,
              featuredProjects: Project[],
              pastProjects: Project[],
              pastProjectsIntro: string,) {
    this.id = id;
    this.slug = slug;
    this.contentBody = contentBody;
    this.featuredImage = featuredImage;
    this.featuredProjects = featuredProjects;
    this.pastProjects = pastProjects;
    this.pastProjectsIntro = pastProjectsIntro;
  }

}

export type _musicWorkPageData = {
  id: number,
  slug: string,
  acf: {
    content_body: string,
    featured_image: string,
    featured_projects: [{
      featured_project: number
    }],
    past_projects: [{
      featured_project: number
    }],
    past_projects_intro: string
  }
}

export function parseMusicWorkPageData(data: _musicWorkPageData, featuredProjectsData: _featuredProjectData[]): MusicWorkPage {
  const featuredProjectsIds = data.acf.featured_projects.map((project) => {
    return project.featured_project;
  });
  const featuredProjects = parseFeaturedProjectsDataAndGetProjects(featuredProjectsData.filter((projectData) => {
    return featuredProjectsIds.includes(projectData.id);
  }), featuredProjectsIds);
  const pastProjectsIds = data.acf.past_projects.map((project) => {
    return project.featured_project;
  });
  const pastProjects = parseFeaturedProjectsDataAndGetProjects(featuredProjectsData.filter((projectData) => {
    return pastProjectsIds.includes(projectData.id);
  }), pastProjectsIds);
  return new MusicWorkPage(
    data.id,
    data.slug,
    data.acf.content_body,
    data.acf.featured_image,
    featuredProjects,
    pastProjects,
    data.acf.past_projects_intro
  );
}