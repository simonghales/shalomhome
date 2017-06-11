require('isomorphic-fetch');
const sm = require('sitemap')

const hostname = 'https://hydricmedia-react.herokuapp.com'
const cacheTime = 600000

const urls = [
  {
    url: '', // landing
    changefreq: 'monthly',
    priority: 1.0,
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: '/what',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: '/how',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: '/team',
    changefreq: 'monthly',
    priority: 0.5,
  },
  {
    url: '/clients',
    changefreq: 'monthly',
    priority: 0.5,
  },
  {
    url: '/work',
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    url: '/music',
    changefreq: 'monthly',
    priority: 0.5,
  },
  {
    url: '/labs',
    changefreq: 'monthly',
    priority: 0.5,
  },
  {
    url: '/blog',
    changefreq: 'daily',
    priority: 0.5,
  },
  {
    url: '/jobs',
    changefreq: 'monthly',
    priority: 0.5,
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: 0.9,
  },
];

const createSitemap = () => {
  const defaultSitemap = sm.createSitemap ({
    hostname: hostname,
    cacheTime: cacheTime,        // 600 sec - cache purge period
    urls: urls
  });
  return new Promise((resolve, reject) => {
    fetch('https://hydric-node-proxy.herokuapp.com/wordpress' + '/posts?per_page=20')
      .then((response) => {
        if (response.ok) {
          response.json()
            .then((data) => {
              const blogUrls = data.map((post) => {
                return {
                  url: '/blog/' + post.slug,
                  changefreq: 'monthly',
                  priority: 0.5
                }
              });
              const sitemap = sm.createSitemap ({
                hostname: hostname,
                cacheTime: cacheTime,        // 600 sec - cache purge period
                urls: urls.concat(blogUrls)
              });
              resolve(sitemap);
            }, (error) => {
              resolve(defaultSitemap);
            })
            .catch((error) => {
              resolve(defaultSitemap);
            });
        } else {
          resolve(defaultSitemap);
        }
      }, (error) => {
        resolve(defaultSitemap);
      })
      .catch((error) => {
        resolve(defaultSitemap);
      });
  })
}

const sitemap = module.exports = createSitemap;