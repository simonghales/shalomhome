import {CATEGORY_JOB_BRISBANE, CATEGORY_JOB_NYC, JOB_LOCATIONS} from '../constants/categories';
export class Job {

  id: number;
  slug: string;
  title: string;
  contentBody: string;
  previewDescription: string;
  categories: number[];

  constructor(id: number,
              slug: string,
              title: string,
              contentBody: string,
              previewDescription: string,
              categories: number[]) {
    this.id = id;
    this.slug = slug;
    this.title = title;
    this.contentBody = contentBody;
    this.previewDescription = previewDescription;
    this.categories = categories;
  }

  getJobLocation(): string {
    let matchedLocation = '';
    this.categories.forEach((category) => {
      if (JOB_LOCATIONS[category]) {
        matchedLocation = JOB_LOCATIONS[category];
        return false;
      }
    });
    return matchedLocation;
  }

}

export type _jobData = {
  id: number,
  slug: string,
  acf: {
    content_body: string,
    preview_description: string,
    title: string
  },
  categories: number[]
}

export function parseJobsDataByLocation(data: _jobData[]): Job[] {
  const allJobs = parseJobsData(data);
  const brisbaneJobs = allJobs.filter((job) => {
    return (job.categories.includes(CATEGORY_JOB_BRISBANE));
  });
  const nycJobs = allJobs.filter((job) => {
    return (job.categories.includes(CATEGORY_JOB_NYC));
  });
  return {
    brisbane: brisbaneJobs,
    nyc: nycJobs
  }
}

export function parseJobsData(data: _jobData[]): Job[] {
  return data.map((job) => {
    return parseJobData(job);
  });
}

export function parseJobData(data: _jobData): Job {
  return new Job(
    data.id,
    data.slug,
    data.acf.title,
    data.acf.content_body,
    data.acf.preview_description,
    data.categories
  );
}