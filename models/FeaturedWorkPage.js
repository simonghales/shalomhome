import {_featuredProjectData, parseFeaturedProjectsDataAndGetProjects, Project} from './Project';
import {_testimonialData, parseTestimonialData, Testimonial} from './Testimonial';
export class FeaturedWorkPage {

  id: number;
  slug: string;
  topFeaturedProjects: Project[];
  featuredTestimonial: Testimonial;
  bottomFeaturedProjects: Project[];

  constructor(id: number,
              slug: string,
              topFeaturedProjects: Project[],
              featuredTestimonial: Testimonial,
              bottomFeaturedProjects: Project[],) {
    this.id = id;
    this.slug = slug;
    this.topFeaturedProjects = topFeaturedProjects;
    this.featuredTestimonial = featuredTestimonial;
    this.bottomFeaturedProjects = bottomFeaturedProjects;
    console.log('top and bottom', topFeaturedProjects, bottomFeaturedProjects);
  }

}

export type _featuredWorkPageData = {
  id: number,
  slug: string,
  acf: {
    bottom_featured_projects: [
      {
        featured_project: number
      }
      ],
    featured_testimonial: number,
    top_featured_projects: [
      {
        featured_project: number
      }
      ]
  }
}

export function parseFeaturedWorkPageData(data: _featuredWorkPageData, featuredProjectsData: _featuredProjectData[], featuredTestimonialData: _testimonialData): FeaturedWorkPage {
  const topFeaturedProjectsIds = data.acf.top_featured_projects.map((project) => {
    return project.featured_project;
  });
  const topFeaturedProjects = parseFeaturedProjectsDataAndGetProjects(featuredProjectsData.filter((projectData) => {
    return topFeaturedProjectsIds.includes(projectData.id);
  }), topFeaturedProjectsIds);
  const bottomFeaturedProjectIds = data.acf.bottom_featured_projects.map((project) => {
    return project.featured_project;
  });
  const bottomFeaturedProjects = parseFeaturedProjectsDataAndGetProjects(featuredProjectsData.filter((projectData) => {
    return bottomFeaturedProjectIds.includes(projectData.id);
  }), bottomFeaturedProjectIds);
  return new FeaturedWorkPage(
    data.id,
    data.slug,
    topFeaturedProjects,
    parseTestimonialData(featuredTestimonialData),
    bottomFeaturedProjects
  );
}