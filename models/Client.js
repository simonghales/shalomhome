import {Image, parseImageData} from './Image';
import {_imageData} from '../utils/components';

export class Client {
  name: string;
  image: Image;

  constructor(
              name: string,
              image: Image,) {
    this.name = name;
    this.image = image;
  }
}

export type _clientData = {
  client_image: _imageData,
  client_name: string
}

export function parseClientsData(data: _clientData[]): Client[] {
  return data.map((client) => {
    return parseClientData(client);
  });
}

export function parseClientData(data: _clientData): Client {
  return new Client(data.client_name, parseImageData(data.client_image));
}