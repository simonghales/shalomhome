// @disableflow
/* global PROXY_ENABLED */
declare var PROXY_ENABLED: string;

console.warn('PROXY_ENABLED', PROXY_ENABLED);

// export const API_ADDRESS: string = 'http://www.hydricmedia.com/wp-json/wp/v2';
export const API_ADDRESS: string = (PROXY_ENABLED) ? 'https://hydric-node-proxy.herokuapp.com/wordpress' : 'http://www.hydricmedia.com/wp-json/wp/v2';