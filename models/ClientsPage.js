import {_testimonialData, parseTestimonialData} from './Testimonial';
import Testimonial from '../components/Testimonial/Testimonial';
export class ClientsPage {

  id: number;
  slug: string;
  bodyContent: string;
  featuredTestimonial: Testimonial;
  favoriteClients: _clientObject[];

  constructor(id: number,
              slug: string,
              bodyContent: string,
              featuredTestimonial: Testimonial,
              favoriteClients: _clientObject[],) {
    this.id = id;
    this.slug = slug;
    this.bodyContent = bodyContent;
    this.featuredTestimonial = featuredTestimonial;
    this.favoriteClients = favoriteClients;
  }

}

export type _clientObject = {
  image: string;
  label: string;
}

export type _clientsPageData = {
  id: number,
  slug: string,
  acf: {
    body_content: string,
    favorite_clients: [{
      client_image: string,
      client_label: string
    }],
    featured_testimonial: {
      ID: number
    }
  }
}

export function parseClientsData(data: _clientsPageData, featuredTestimonial: _testimonialData): ClientsPage {
  return new ClientsPage(
    data.id,
    data.slug,
    data.acf.body_content,
    parseTestimonialData(featuredTestimonial),
    data.acf.favorite_clients.map((client) => {
      return {
        image: client.client_image,
        label: client.client_label
      }
    })
  );
}