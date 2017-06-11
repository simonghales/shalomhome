const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('blog', '/blog/:slug', 'blogPost')
routes.add('job', '/job/:slug', 'job')
routes.add('work', '/work/:slug', 'workProject')