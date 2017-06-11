export class Author {
  id: number;
  slug: string;
  name: string;
  image: string;
  description: string;

  constructor(id: number,
              slug: string,
              name: string,
              image: string,
              description: string) {
    this.id = id;
    this.slug = slug;
    this.name = name;
    this.image = image;
    this.description = description;
  }

}

export type _authorData = {
  avatar_urls: {
    24: string,
    48: string,
    96: string
  },
  description: string,
  id: number,
  slug: string,
  name: string
}

export function parseAuthorDataAndGetAuthorModel(authorData: _authorData) {
  const image = (authorData.hasOwnProperty('avatar_urls')) ? authorData.avatar_urls['96'] : '';
  return new Author(authorData.id, authorData.slug, authorData.name, image, authorData.description);
}