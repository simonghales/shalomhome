// @DISABLEDflow

import 'isomorphic-fetch';
import {API_ADDRESS} from './config';
import {_homeData} from '../models/HomePage';
import {_clientsPageData} from '../models/ClientsPage';
import {CATEGORY_JOB_LISTED} from '../constants/categories';
import {_contactPageData} from '../models/ContactPage';
import {_featuredWorkPageData} from '../models/FeaturedWorkPage';
import {_musicWorkPageData} from '../models/MusicWorkPage';
import {_labsWorkPageData} from '../models/LabsWorkPage';
import {getComponentApi} from '../utils/components';
var all = require('promise-all');

export type _apiOptions = {
  ids?: number[],
  categories?: number[],
  slug?: string
}

export type _defaultComponent = {
  acf_fc_layout: string,
  preloadedData?: any,
  preload_data?: boolean
}

export type _defaultPageWithComponents = {
  acf: {
    content?: [_defaultComponent]
  }
}

export class DataApi {

  getPageFullData(initialPromise: any) {
    const data: any = new Promise((resolve, reject) => {

      initialPromise
        .then((page: _defaultPageWithComponents) => {

          if (!page.acf.content) {
            resolve({page});
          } else {

            let promises = {};
            let preloadApiCount = 0;

            page.acf.content.forEach((content) => {
              if (content.preload_data) {
                const contentPromise = getComponentApi(content, preloadApiCount);
                promises = {
                  ...contentPromise,
                  ...promises
                };
                preloadApiCount++;
              }
            });

            all(promises)
              .then((values) => {

                let matchedPreloadedApiCount = 0;

                page.acf.content = page.acf.content.map((content) => {
                  if (content.preload_data && values[content.acf_fc_layout + matchedPreloadedApiCount.toString()]) {
                    const newContent = {
                      preloadedData: values[content.acf_fc_layout + matchedPreloadedApiCount.toString()],
                      ...content
                    };
                    matchedPreloadedApiCount++;
                    return newContent;
                  } else {
                    return content;
                  }
                });

                resolve({
                  page,
                  ...values
                });
              }, (error) => {
                console.warn('failed to load all promises...', error);
                reject(error);
              });

          }

        }, (error) => {
          reject(error);
        });

    });
    return data;
  }

  getProject(slug: string) {
    return this.getAPICore('projects', {
      slug
    }, true);
  }

  getContentFooter(options: _apiOptions) {
    return this.getAPICore('feeters', options, true);
  }

  getAboutTeamPage() {
    return this.getAPICore('about_pages', {
      slug: 'team-page'
    }, true);
  }

  getAboutClientsPage() {
    return this.getAPICore('about_pages', {
      slug: 'clients-page'
    }, true);
  }

  getWorkFeaturedPage() {
    return this.getAPICore('work_pages', {
      slug: 'featured-work'
    }, true);
  }

  getWorkMusicPage() {
    return this.getAPICore('work_pages', {
      slug: 'music-work-page'
    }, true);
  }

  getWorkLabsPage() {
    return this.getAPICore('work_pages', {
      slug: 'labs-work-page'
    }, true);
  }

  getHomePage() {
    return this.getAPICore('home_pages', {
      slug: 'home-page'
    }, true);
  }

  getContactPageFull() {
    const data: any = new Promise((resolve, reject) => {

      this.getContactPage()
        .then((pages: _contactPageData[]) => {
          this.getAPICore('social_accounts', {
            ids: pages[0].acf.social_links.map((socialAccount) => {
              return socialAccount.social_account
            })
          })
            .then((socialAccounts) => {
              resolve({
                page: pages[0],
                socialAccounts
              });
            }, (error) => {
              reject(error);
            });
        }, (error) => {
          reject(error);
        });

    });
    return data;
  }

  getContactPage() {
    return this.getAPICore('contact_pages', {
      slug: 'contact-page'
    });
  }

  getProjects(ids?: number[]) {
    return this.getAPICore('projects', {
      ids
    });
  }

  getTeamMembers(ids?: number[]) {
    return this.getAPICore('team_members', {
      ids
    });
  }

  getTestimonials(ids?: number[]) {
    return this.getAPICore('testimonials', {
      ids
    });
  }

  getJob(slug: string) {
    return this.getAPICore('jobs', {
      slug: slug
    });
  }

  getJobListings() {
    return this.getAPICore('jobs', {
      categories: [CATEGORY_JOB_LISTED]
    });
  }

  getTestimonialsProxy(ids?: number[]) {
    return this.getAnythingByType('testimonials', ids);
  }

  getRequiredDataAll(additionalPromises: any) {
    const data: any = new Promise((resolve, reject) => {

      const promises = {
        footer: this.getFooterData(),
        ...additionalPromises
      }

      all(promises)
        .then((values) => {
          resolve(values);
        }, (error) => {
          console.warn('failed to load all promises...', error);
          reject(error);
        });

    });
    return data;
  }

  getAPICore(type: string, options: _apiOptions, singular: boolean = false): any {

    const {
      ids,
        categories,
        slug
    } = options;

    let apiUrl = API_ADDRESS + '/' + type + '?_embed&';

    if (ids) {
      apiUrl += 'include[]=' + ids.join('&include[]=') + '&';
    }

    if (categories) {
      apiUrl += 'categories=' + categories.join(',') + '&';
    }

    if (slug) {
      apiUrl += 'slug=' + slug;
    }

    return new Promise((resolve, reject) => {
      fetch(apiUrl)
        .then((results: any) => {
          if (results.ok) {
            results.json()
              .then((data: _coreData[]) => {
                if (singular) {
                  if (!data || data.length === 0) {
                    console.warn('data isnt valid so im rejecting', data);
                    reject();
                  } else {
                    resolve(data[0]);
                  }
                } else {
                  if (ids) {
                    data = sortDataByIds(data, ids);
                  }
                  resolve(data);
                }
              }, (error) => {
                console.warn('failed to load for ' + apiUrl, error);
                reject(error);
              });
          } else {
            console.warn('failed to load for ' + apiUrl);
            reject();
          }
        }, (error) => {
          console.warn('failed to load for ' + apiUrl, error);
          reject(error);
        })
    });
  }

  getAnythingByType(type: string, ids?: number[]) {
    let apiUrl = API_ADDRESS + '/' + type;
    if (ids) {
      apiUrl += '?include[]=' + ids.join('&include[]=');
    }
    return new Promise((resolve, reject) => {
      fetch(apiUrl)
        .then((results: any) => {
          if (results.ok) {
            results.json()
              .then((data) => {
                resolve(data);
              }, (error) => {
                reject(error);
              });
          } else {
            reject();
          }
        }, (error) => {
          reject(error);
        })
    });
  }

  getSocialAccounts(ids?: number[]) {
    return this.getAPICore('social_accounts', {
      ids
    });
  }

  getFooterData() {
    const apiUrl = API_ADDRESS + '/feeters?_embed&slug=site_footer';
    const data: any = new Promise((resolve, reject) => {
      fetch(apiUrl)
        .then((results: any) => {
          if (results.ok) {
            results.json()
              .then((data) => {
                // todo - make sure data.length > 0
                resolve(data[0]);
              });
          } else {
            reject();
          }
        }, (error) => {
          reject(error);
        });
    });
    return data;
  }

  getPageData(type: string, slug?: string) {
    let apiUrl = API_ADDRESS + '/' + type;
    apiUrl += (slug) ? '?slug=' + slug + '&_embed' : '?_embed';
    const data: any = new Promise((resolve, reject) => {
      fetch(apiUrl)
        .then((results: any) => {
          if (results.ok) {
            results.json()
              .then((data) => {
                // todo - confirm data.length !== 0
                const homeData = data[0];
                resolve(homeData);
              }, (error) => {
                reject(error);
              });
          } else {
            reject();
          }
        }, (error) => {
          reject(error);
        });
    });
    return data;
  }

  getBlogPost(slug: string) {
    const apiUrl = API_ADDRESS + '/posts?_embed&slug=' + slug;
    const data: any = new Promise((resolve, reject) => {
      fetch(apiUrl)
        .then((results: any) => {
          if (results.ok) {
            results.json()
              .then((data) => {
                resolve(data);
              });
          } else {
            reject();
          }
        }, (error) => {
          reject(error);
        });
    });
    return data;
  }

  getBlogPosts(count?: number = 5) {
    const apiUrl = API_ADDRESS + '/posts?_embed&per_page=' + count;
    const data: any = new Promise((resolve, reject) => {
      fetch(apiUrl)
        .then((results: any) => {
          if (results.ok) {
            results.json()
              .then((data) => {
                resolve(data);
              });
          } else {
            reject();
          }
        }, (error) => {
          reject(error);
        });
    });
    return data;
  }

  getProjectsDataByIds(ids: string[]) {
    const apiUrl = API_ADDRESS + '/projects?_embed&include[]=' + ids.join('&include[]=');
    const data: any = new Promise((resolve, reject) => {
      fetch(apiUrl)
        .then((results: any) => {
          if (results.ok) {
            results.json()
              .then((data) => {
                resolve({data});
              }, (error) => {
                console.warn('failed');
                reject(error);
              });
          } else {
            console.warn('failed');
            reject();
          }
        }, (error) => {
          console.warn('failed');
          reject(error);
        })
    });
    return data;
  }

}

export type _coreData = {
  id: number
};

export function sortDataByIds(data: _coreData[], ids: number[]) {
  let sortedData = [];
  data.forEach((dataItem) => {
    sortedData[ids.indexOf(dataItem.id)] = dataItem;
  });
  return sortedData;
}

export const dataApi: DataApi = new DataApi();