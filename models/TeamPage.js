import {_teamMemberData, parseMultipleTeamMembers, TeamMember} from './TeamMember';
export class TeamPage {

  id: number;
  slug: string;
  coverImage: string;
  featuredMembers: TeamMember[];
  teamMembers: TeamMember[];

  constructor(id: number,
              slug: string,
              coverImage: string,
              featuredMembers: TeamMember[],
              teamMembers: TeamMember[]
  ) {
    this.id = id;
    this.slug = slug;
    this.coverImage = coverImage;
    this.featuredMembers = featuredMembers;
    this.teamMembers = teamMembers;
  }

}

export type _teamPageData = {
  id: number,
  slug: string,
  acf: {
    cover_image: string,
    featured_team_members: [{
      team_member: number
    }],
    team_members: [{
      team_member: number
    }]
  }
}

export function parseTeamPageData(teamPageData: _teamPageData, teamMembersData: _teamMemberData[]): TeamPage {
  const featuredMembers = teamPageData.acf.featured_team_members.map((teamMember) => {
    return teamMembersData.filter((comparedTeamMember) => {
      return teamMember.team_member === comparedTeamMember.id;
    })[0];
  });
  const teamMembers = teamPageData.acf.team_members.map((teamMember) => {
    return teamMembersData.filter((comparedTeamMember) => {
      return teamMember.team_member === comparedTeamMember.id;
    })[0];
  });
  return new TeamPage(
    teamPageData.id,
    teamPageData.slug,
    teamPageData.acf.cover_image,
    parseMultipleTeamMembers(featuredMembers),
    parseMultipleTeamMembers(teamMembers),
  );
}