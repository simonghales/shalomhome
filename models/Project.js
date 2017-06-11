import {_embeddedProjectData, _imageData} from '../utils/components';
import {Image, parseImageData} from './Image';
export class Project {

  title: string;
  id: string;
  slug: string;
  previewImage: Image;
  description: string;
  appStoreURL: string;
  playStoreURL: string;
  websiteURL: string;
  largePreview: boolean = false;

  constructor(title: string,
              id: string,
              slug: string,
              description: string,
              appStoreURL: string,
              playStoreURL: string,
              websiteURL: string,
              previewImage: Image,
              largePreview: boolean) {
    this.title = title;
    this.id = id;
    this.slug = slug;
    this.description = description;
    this.appStoreURL = appStoreURL;
    this.playStoreURL = playStoreURL;
    this.websiteURL = websiteURL;
    this.previewImage = previewImage;
    this.largePreview = largePreview;
  }

}

export type _featuredMedia = {
  media_details: _imageData
}

export type _featuredProjectData = {
  acf: {
    external_urls: {
      app_store_url: string,
      play_store_url: string,
      website_url: string,
    },
    preview_image: _imageData,
    project_description: string
  },
  id: number,
  slug: string,
  title: {
    rendered: string
  },
  _embedded: {
    'wp:featuredmedia': [_featuredMedia]
  }
}

export function parseProjectsData(featuredProjects: _featuredProjectData[], embeddedProjectData: _embeddedProjectData[]): Project[] {
  let projects: Project[] = [];
  featuredProjects.forEach((projectData, index) => {
    const largePreview = embeddedProjectData[index].full_width;
    projects.push(parseFeaturedProjectDataAndGetProject(projectData, largePreview));
  });
  return projects;
}

export function parseFeaturedProjectsDataAndGetProjects(featuredProjects: _featuredProjectData[], sortedIds?: string[]): Project[] {
  let projects: Project[] = [];
  featuredProjects.forEach((projectData) => {
    projects.push(parseFeaturedProjectDataAndGetProject(projectData));
  });
  if (sortedIds) {
    let sortedProjects = [];
    projects.forEach((project) => {
      sortedProjects[sortedIds.indexOf(project.id)] = project;
    });
    return sortedProjects;
  } else {
    return projects;
  }
}

export function parseFeaturedProjectDataAndGetProject(projectData: _featuredProjectData, largePreview: boolean = false): Project {
  const id = projectData.id;
  const title = projectData.title.rendered;
  const slug = projectData.slug;
  const previewImage = parseImageData(projectData.acf.preview_image);
  return new Project(title,
    id,
    slug,
    projectData.acf.project_description,
    projectData.acf.external_urls.app_store_url,
    projectData.acf.external_urls.play_store_url,
    projectData.acf.external_urls.website_url,
    previewImage,
    largePreview);
}