const prod = process.env.NODE_ENV === 'production'
const proxyEnabled = (process.env.NODE_PROXY && process.env.NODE_PROXY == 'true') ? 'true' : 'false';

console.log('proxyenabled????', proxyEnabled)

module.exports = {
  'PROXY_ENABLED': proxyEnabled
}