const express = require('express')
const { parse } = require('url')
const { join } = require('path')
const next = require('next')
const routes = require('./routes')
const sitemap = require('./serverConfig/sitemap')
const LRUCache = require('lru-cache')
const httpProxy = require('http-proxy-middleware')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
// const handle = app.getRequestHandler()
const handle = routes.getRequestHandler(app)

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1 hour
})

app.prepare()
  .then(() => {
    const server = express()
    const port = process.env.PORT || 3000;

    server.get('/sitemap.xml', (req, res) => {
      sitemap()
        .then((generatedSitemap) => {
          generatedSitemap.toXML( function (err, xml) {
            if (err) {
              return res.status(500).end();
            }
            res.header('Content-Type', 'application/xml');
            res.send(xml);
          });
        }, () => {
          console.error('failed to get sitemap');
        })
        .catch(() => {
          console.error('failed to get sitemap');
        });
    })

    server.get('/robots.txt', (req, res) => {
      const parsedUrl = parse(req.url, true)
      const path = join(__dirname, 'static', parsedUrl.pathname)
      app.serveStatic(req, res, path)
    })

    if (!dev) {

      server.get('/cacheBuster', (req, res) => {
        console.log('busting dem caches')
        ssrCache.reset()
        return handle(req, res)
      })

    }

    server.get([
      '/',
      '/about',
      '/what',
      '/how',
      '/team',
      '/clients',
      '/work',
      '/music',
      '/labs',
      '/blog',
      '/jobs',
      '/contact',
    ], (req, res) => {
      if (!dev) {
        const parsedUrl = parse(req.url, true);
        return renderAndCache(req, res, parsedUrl.pathname)
      }
      return handle(req, res)
    })

    server.get('/blog/:slug', (req, res) => {
      if (dev) return handle(req, res);
      const slug = req.params.slug;
      const queryParams = { slug: slug };
      renderAndCache(req, res, '/blogPost', queryParams)
    })

    server.get('/job/:slug', (req, res) => {
      if (dev) return handle(req, res);
      const slug = req.params.slug;
      const queryParams = { slug: slug };
      renderAndCache(req, res, '/job', queryParams)
    })

    server.get('/work/:slug', (req, res) => {
      if (dev) return handle(req, res);
      const slug = req.params.slug;
      const queryParams = { slug: slug };
      renderAndCache(req, res, '/workProject', queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:' + port)
    })

  })

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey (req) {
  return `${req.url}`
}

function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`)
    res.send(ssrCache.get(key))
    return
  }

  // If not let's render the page into HTML
  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)

      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}