import {_imageData} from '../utils/components';
export class Image {

  id: number;
  originalUrl: string;
  originalWidth: number;
  originalHeight: number;
  largeUrl: string;
  largeWidth: number;
  largeHeight: number;
  mediumUrl: string;
  mediumWidth: number;
  mediumHeight: number;
  thumbnailUrl: string;
  thumbnailWidth: number;
  thumbnailHeight: number;

  constructor(id: number,
              originalUrl: string,
              originalWidth: number,
              originalHeight: number,
              largeUrl: string,
              largeWidth: number,
              largeHeight: number,
              mediumUrl: string,
              mediumWidth: number,
              mediumHeight: number,
              thumbnailUrl: string,
              thumbnailWidth: number,
              thumbnailHeight: number,) {
    this.id = id;
    this.originalUrl = originalUrl;
    this.originalWidth = originalWidth;
    this.originalHeight = originalHeight;
    this.largeUrl = largeUrl;
    this.largeWidth = largeWidth;
    this.largeHeight = largeHeight;
    this.mediumUrl = mediumUrl;
    this.mediumWidth = mediumWidth;
    this.mediumHeight = mediumHeight;
    this.thumbnailUrl = thumbnailUrl;
    this.thumbnailWidth = thumbnailWidth;
    this.thumbnailHeight = thumbnailHeight;
  }

  getOriginalImage() {
    return {
      url: this.originalUrl,
      width: this.originalWidth,
      height: this.originalHeight,
    }
  }

  getLargeImage() {
    return {
      url: this.largeUrl,
      width: this.largeWidth,
      height: this.largeHeight,
    }
  }

  getMediumImage() {
    return {
      url: this.mediumUrl,
      width: this.mediumWidth,
      height: this.mediumHeight,
    }
  }

  getThumbnailImage() {
    return {
      url: this.thumbnailUrl,
      width: this.thumbnailWidth,
      height: this.thumbnailHeight,
    }
  }

}

export function parseImageData(data: _imageData): Image {
  return new Image(
    data.id,
    data.url,
    data.width,
    data.height,
    data.sizes.large,
    data.sizes['large-width'],
    data.sizes['large-height'],
    data.sizes.medium,
    data.sizes['medium-width'],
    data.sizes['medium-height'],
    data.sizes.thumbnail,
    data.sizes['thumbnail-width'],
    data.sizes['thumbnail-height'],
  );
}