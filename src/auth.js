/** @module auth */

import * as core from "./core";
import * as storage from "./storage";
import * as ajax from './ajax';

/**
 * Authenticate user.
 * @function
 * @param {string} username - Username.
 * @param {string} password - Password.
 * @param {string=} token - 2FA token.
 * @returns {Object} user and tokens.
 */
export const auth = async (config, username, password, token = "") => {
  const url = `${config.url.auth}/api/user/auth`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password,
      token: token
    })
  });

  if (response.status === 200) {
    const user = await response.json();
    storage.setUser(user);
    return user;
  } else if (response.status === 401) {
    return null;
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Register user.
 * @function
 * @param {Object} user - User.
 * @returns {Object} user.
 */
export const register = async (config, user) => {
  const url = `${config.url.auth}/api/user`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  if (response.status === 200) {
    return await response.json();
  }
  else {
    throw new Error(response.statusText);
  }
};

/**
 * Subscribe.
 * @function
 * @param {Object} subscriber - Subscriber.
 * @returns {Object} user.
 */
export const subscribe = async (config, subscriber) => {
  const url = `${config.url.auth}/api/subscriber`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(subscriber)
  });

  if (response.status === 200) {
    return await response.json();
  }
  else {
    throw new Error(response.statusText);
  }
};

/**
 * Get subscriber.
 * @function
 * @param {string} id - Subscriber id.
 * @returns {Object} subscriber.
 */
export const getSubscriber = (config, id) => {
  const url = `${config.url.auth}/api/subscriber`;
  return ajax.getById(config, url, id);
};

/**
 * Get collection of subscribers that match a specified filter.
 * @function
 * @param {Object=} filters - Filters.
 * @param {Object=} sort - Sort.
 * @param {Object=} page - Page.
 * @returns {Object} collection of subscribers.
 */
export const getSubscribers = (
  config,
  filters = core.DEFAULT_FILTERS,
  sort = core.DEFAULT_SORT,
  page = core.DEFAULT_PAGE
) => {
  const url = `${config.url.auth}/api/subscriber`;
  return ajax.get(config, url, filters, sort, page, core.DEFAULT_FIELDS);
};

/**
 * Authenticate user.
 * @function
 * @param {number} provider - Provider.
 * @param {string} code - OAuth2 code.
 * @param {string} redirectUri - Redirect uri.
 * @param {string=} configId - Config id.
 * @returns {Object} user and tokens.
 */
export const oAuth = async (config, provider, code, redirectUri, configId = null) => {
  const url = `${config.url.auth}/api/user/oauth`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      provider,
      code,
      redirect_uri: redirectUri,
      config: configId
    })
  });

  if (response.status === 200) {
    const user = await response.json();
    storage.setUser(user);
    return user;
  } else if (response.status === 401) {
    return null;
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Reset password.
 * @function
 * @param {object} data - Data.
 * @param {string} redirectUri - Redirect uri.
 */
export const reset = async (config, data) => {
  const url = `${config.url.auth}/api/user/reset`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
};

/**
 * Update user.
 * @function
 * @param {number} provider - Provider.
 * @param {string} code - OAuth2 code.
 * @param {string} redirectUri - Redirect uri.
 * @returns {Object} user.
 */
export const updateOauth = async (config, provider, code, redirectUri) => {
  const url = `${config.url.auth}/api/user/oauth`;

  const response = await fetch(url, {
    method: "PUT",
    headers: core.getHeaders(),
    body: JSON.stringify({
      provider,
      code,
      redirect_uri: redirectUri
    })
  });

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await updateOauth(config, provider, code, redirectUri);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Generate secret.
 * @function
 * @returns {Object} secret.
 */
export const generateSecret = async config => {
  const url = `${config.url.auth}/api/user/secret`;

  const response = await fetch(url, {
    method: "POST",
    headers: core.getHeaders()
  });

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await generateSecret(config);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Get collection of users that match a specified filter.
 * @function
 * @param {Array} filters - Filters.
 * @param {Object=} sort - Sort.
 * @param {Object=} page - Page.
 * @returns {Array} collection of users.
 */
export const getUsers = async (config, filters, sort = { field: "name", dir: "asc" }, page = core.DEFAULT_PAGE) => {
  const url = `${config.url.auth}/api/user?filters=${JSON.stringify(
    filters
  )}&page=${JSON.stringify(page)}&sort=${JSON.stringify(
    sort
  )}`;

  const response = await fetch(url, {
    headers: core.getHeaders()
  });

  if (response.status === 200) {
    const res = await response.json();
    return res;
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await getUsers(config, filters, sort, page);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Check user.
 * @function
 * @param {string} username - Username.
 * @returns {Array} collection of users.
 */
export const checkUser = async (config, username) => {
  const url = `${config.url.auth}/api/user/check?username=${username}`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  });

  if (response.status === 200) {
    const res = await response.json();
    return res;
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Get user from cache.
 * @function
 * @param {string} id - User id.
 * @returns {Object} user.
 */
export const getUserCached = async (config, id) => {
  const cacheKey = 'user/' +id;
  const cacheStorage = await caches.open('kd-cache');
  const cachedResponse = await cacheStorage.match(cacheKey);
  if(cachedResponse) {
    return await cachedResponse.json();
  }

  const url = `${config.url.auth}/api/user/${id}`;

  const response = await fetch(url, {
    headers: core.getHeaders()
  });

  if (response.status === 200) {
    cacheStorage.put(cacheKey, response.clone());
    return await response.json();
  } else if (response.status === 404) {
    return null;
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await getUser(config, id);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Get user.
 * @function
 * @param {string} id - User id.
 * @returns {Object} user.
 */
export const getUser = async (config, id) => {
  const url = `${config.url.auth}/api/user/${id}`;

  const response = await fetch(url, {
    headers: core.getHeaders()
  });

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 404) {
    return null;
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await getUser(config, id);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Update user.
 * @function
 * @param {string} id - User id.
 * @paramm {Object} user - User.
 * @returns {Object} user.
 */
export const updateUser = async (config, id, data) => {
  const url = `${config.url.auth}/api/user/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: core.getHeaders(),
    body: JSON.stringify(data)
  });

  if (response.status === 200) {
    const user = await response.json();
    const u = storage.getUser();
    storage.setUser({ ...user, token: u.token, refreshToken: u.refreshToken });
    return user;
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await updateUser(config, id, data);
  } else {
    throw new Error(response.statusText);
  }
};
