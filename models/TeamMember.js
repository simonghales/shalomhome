import {Image, parseImageData} from './Image';
import {_teamMemberData} from '../utils/components';
export class TeamMember {

  id: number;
  slug: string;
  name: string;
  position: string;
  email: string;
  description: string;
  image: Image;

  constructor(id: number,
              slug: string,
              name: string,
              position: string,
              email: string,
              description: string,
              image: Image) {
    this.id = id;
    this.slug = slug;
    this.name = name;
    this.position = position;
    this.email = email;
    this.description = description;
    this.image = image;
  }

}

export function parseMultipleTeamMembers(data: _teamMemberData[]): TeamMember[] {
  return data.map((teamMember) => {
    return parseTeamMemberData(teamMember);
  });
}

export function parseTeamMemberData(data: _teamMemberData): TeamMember {
  return new TeamMember(
    data.id,
    data.slug,
    data.acf.name,
    data.acf.position,
    data.acf.email,
    data.acf.description,
    parseImageData(data.acf.profile_image)
  );
}