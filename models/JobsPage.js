import {_stepObject} from './HowPage';
export class JobsPage {

  id: number;
  slug: string;
  benefits: _stepObject[];
  coverImage: string;
  featuredTestimonialId: number;

  constructor(id: number,
              slug: string,
              benefits: _stepObject[],
              coverImage: string,
              featuredTestimonialId: number,) {
    this.id = id;
    this.slug = slug;
    this.benefits = benefits;
    this.coverImage = coverImage;
    this.featuredTestimonialId = featuredTestimonialId;
  }

}

export type _jobsPageData = {
  id: number,
  slug: string,
  acf: {
    benefits: [
      {
        benefit_description: string,
        benefit_label: string,
      }
      ],
    cover_image: string,
    featured_testimonial: number
  }
}

export function parseJobsPageData(data: _jobsPageData): JobsPage {
  return new JobsPage(
    data.id,
    data.slug,
    data.acf.benefits.map((benefit) => {
      return {
        content: benefit.benefit_description,
        title: benefit.benefit_label,
      }
    }),
    data.acf.cover_image,
    data.acf.featured_testimonial,
  );
}