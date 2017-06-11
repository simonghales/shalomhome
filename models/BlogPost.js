import {_featuredMedia} from './Project';
import {_authorData, Author, parseAuthorDataAndGetAuthorModel} from './Author';
export class BlogPost {

  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  categories: string[];
  featuredImage: string;
  author: Author;

  constructor(id: number, slug: string, title: string, excerpt: string, content: string, date: string, categories: string[], featuredImage: string, author: Author) {
    this.id = id;
    this.slug = slug;
    this.title = title;
    this.excerpt = excerpt;
    this.content = content;
    this.date = date;
    this.categories = categories;
    this.featuredImage = featuredImage;
    this.author = author;
  }

}

export type _blogPostData = {
  id: number,
  slug: string,
  date_gmt: string,
  title: {
    rendered: string
  },
  content: {
    rendered: string
  },
  excerpt: {
    rendered: string
  },
  _embedded: {
    'author': [_authorData],
    'wp:featuredmedia': [_featuredMedia],
    'wp:term': [[{
      id: number,
      name: string,
      slug: string,
      taxonomy: string
    }]]
  }
}

export function parseBlogsDataAndGetBlogPosts(blogPostsData: _blogPostData[]): BlogPost[] {
  return blogPostsData.map((data) => {
    return parseBlogDataAndGetBlog(data);
  });
}

export function parseBlogDataAndGetBlog(blogPostData: _blogPostData): BlogPost {
  const id = blogPostData.id;
  const slug = blogPostData.slug;
  const title = blogPostData.title.rendered;
  const excerpt = blogPostData.excerpt.rendered;
  const content = blogPostData.content.rendered;
  const date = blogPostData.date_gmt;
  const filteredCategories = blogPostData['_embedded']['wp:term'].filter((arrayGroup) => {
    return arrayGroup.length > 0 && arrayGroup[0].taxonomy === 'category';
  }).map((arrayGroup) => {
    return arrayGroup.map((item) => {
      return item.name;
    });
  });
  const categories = (filteredCategories.length > 0) ? filteredCategories[0] : [];
  const featuredImage = blogPostData['_embedded']['wp:featuredmedia'][0].media_details.sizes.full.source_url;
  const author = parseAuthorDataAndGetAuthorModel(blogPostData['_embedded']['author'][0]);
  return new BlogPost(id, slug, title, excerpt, content, date, categories, featuredImage, author);
}