import {_reviewsData} from '../utils/components';
export class Testimonial {

  id: number;
  slug: string;
  quote: string;
  nameTitle: string;

  constructor(id: number,
              slug: string,
              quote: string,
              nameTitle: string) {
    this.id = id;
    this.slug = slug;
    this.quote = quote;
    this.nameTitle = nameTitle;
  }

}

export type _testimonialData = {
  id: number,
  slug: string,
  acf: {
    name_title: string,
    quote: string
  }
}

export function parseReviewsData(reviewsData: _reviewsData): Testimonial[] {
  return reviewsData.review.map((review, index) => {
    return new Testimonial(index, index.toString(), review.quote, review.attribute);
  });
}

export function parseTestimonialData(testimonialData: _testimonialData): Testimonial {
  return new Testimonial(testimonialData.id, testimonialData.slug, testimonialData.acf.quote, testimonialData.acf.name_title);
}

export function parseTestimonialsData(data: _testimonialData[]) {
  return data.map((testimonialData) => {
    return parseTestimonialData(testimonialData);
  });
}