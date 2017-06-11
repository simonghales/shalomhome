import {_imageData} from '../utils/components';
import {Image, parseImageData} from './Image';

export type _themeColors = {
  background_color: string,
  footer_background_color: string,
  footer_text_color: string,
  nav_color: string,
  nav_hydric_slash_color: string,
  nav_light_color: string,
  nav_light_hydric_slash_color: string,
  text_color: string,
  title_color: string
}

export class ProjectPage {
  id: number;
  slug: string;
  title: string;
  slogan: string;
  description: string;
  coverImage: Image;
  coverImageDark: boolean;
  appStoreUrl: string;
  playStoreUrl: string;
  websiteUrl: string;
  content: boolean | [];
  themeColors: _themeColors

  constructor(id: number,
              slug: string,
              title: string,
              slogan: string,
              description: string,
              coverImage: Image,
              coverImageDark: boolean,
              appStoreUrl: string,
              playStoreUrl: string,
              websiteUrl: string,
              content: boolean | [],
              themeColors: _themeColors
            ) {
    this.id = id;
    this.slug = slug;
    this.title = title;
    this.slogan = slogan;
    this.description = description;
    this.coverImage = coverImage;
    this.coverImageDark = coverImageDark;
    this.appStoreUrl = appStoreUrl;
    this.playStoreUrl = playStoreUrl;
    this.websiteUrl = websiteUrl;
    this.content = content;
    this.themeColors = themeColors;
  }

}

export type _projectPageData = {
  id: number,
  slug: string,
  title: {
    rendered: string
  },
  acf: {
    app_store_url: string,
    content: boolean | [],
    dark_cover_image: boolean,
    description: string,
    play_store_url: string,
    preview_image: _imageData,
    project_description: string,
    slogan: string,
    top_cover_image: _imageData,
    website_url: string,
    theme_colors: _themeColors
  }
}

export function parseProjectPageData(data: _projectPageData): ProjectPage {
  return new ProjectPage(
    data.id,
    data.slug,
    data.title.rendered,
    data.acf.slogan,
    data.acf.description,
    parseImageData(data.acf.top_cover_image),
    data.acf.dark_cover_image,
    data.acf.app_store_url,
    data.acf.play_store_url,
    data.acf.website_url,
    data.acf.content,
    data.acf.theme_colors,
  );
}