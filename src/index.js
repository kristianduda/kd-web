import * as s from "./store";
import * as a from "./auth";
import * as x from './ajax';
import * as m from './mail';
import * as storage from "./storage";

const DEFAULT_CONFIG = {
  url: {
    store: "https://stored.azurewebsites.net",
    auth: "https://storeauth.azurewebsites.net",
    mail: "https://storemail.azurewebsites.net"
  },
  key: null
}

let _config = DEFAULT_CONFIG;

/**
 * Init.
 * @function
 * @param {Object} config - Configy.
 */
const init = config => {
  _config = { ...DEFAULT_CONFIG, ...config };
};

/**
 * Get config.
 * @function
 * @returns {Object} config.
 */
const getConfig = () => {
  return _config;
}

const store = {
  postFile: (file) => s.postFile(_config, file),
  getFile: (id) => s.getFile(_config, id),
  delFile: (id) => s.delFile(_config, id),
  getById: (collection, id) => s.getById(_config, collection, id),
  get: (collection, filters, sort, page, fields) => s.get(_config, collection, filters, sort, page, fields),
  put: (collection, data, id) => s.put(_config, collection, data, id),
  post: (collection, data) => s.post(_config, collection, data),
  delById: (collection, id) => s.delById(_config, collection, id),
  del: (collection, filters) => s.del(_config, collection, filters),
  aggregation: (collection, group, filters, sort, page) => s.aggregation(_config, collection, group, filters, sort, page),
  getLocation: s.getLocation
}

const auth = {
  auth: (username, password, token) => a.auth(_config, username, password, token),
  oAuth: (provider, code, redirectUri, configId) => a.oAuth(_config, provider, code, redirectUri, configId),
  reset: (username, redirectUri)  => a.reset(_config, username, redirectUri),
  updateOauth: (provider, code, redirectUri) => a.updateOauth(_config, provider, code, redirectUri),
  generateSecret: () => a.generateSecret(_config),
  sign: (data) => a.sign(_config, data),
  verify: (data, signature) => a.verify(_config, data, signature),
  getUsers: (filters, sort, page) => a.getUsers(_config, filters, sort, page),
  getUserCached: (id) => a.getUserCached(_config, id),
  getUser: (id) => a.getUser(_config, id),
  updateUser: (id, data) => a.updateUser(_config, id, data),
  register: (user) => a.register(_config, user),
  checkUser: (username) => a.checkUser(_config, username),
  subscribe: (subscriber) => a.subscribe(_config, subscriber),
  getSubscribers: (filters, sort, page) => a.getSubscribers(_config, filters, sort, page),
  getSubscriber: (id) => a.getSubscriber(_config, id),
}

const ajax = {
  getById: (url, id) => x.getById(_config, url, id),
  get: (url, filters, sort, page, fields) => x.get(_config, url, filters, sort, page, fields),
  put: (url, data, id) => x.put(_config, url, data, id),
  post: (url, data) => x.post(_config, url, data),
  delById: (url, id) => x.delById(_config, url, id),
  del: (url, filters) => x.del(_config, url, filters),
}

const mail = {
  send: (data) => m.send(_config, data),
}

export { init, getConfig, store, auth, mail, storage, ajax };
