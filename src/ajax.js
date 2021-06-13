/** @module ajax */

import * as core from "./core";

/**
 * Get document.
 * @function
 * @param {string} url - Url.
 * @param {string} id - Document id.
 * @param {Object=} params - Params.
 * @returns {Object} document.
 */
export const getById = async (config, url, id, params = undefined) => {
  const u = `${url}/${id}?${core.buildParams(params)}`;

  const response = await fetch(u, {
    headers: core.getHeaders()
  });

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 404) {
    return null;
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await getById(config, url, id, params);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Get collection of documents that match a specified filter.
 * @function
 * @param {string} url - Url.
 * @param {Array=} filters - Filters.
 * @param {Object=} sort - Sort.
 * @param {Object=} page - Page.
 * @param {Object=} fields - Fields.
 * @param {Object=} params - Params.
 * @returns {Object} collection of documents.
 */
export const get = async (
  config,
  url,
  filters = core.DEFAULT_FILTERS,
  sort = core.DEFAULT_SORT,
  page = core.DEFAULT_PAGE,
  fields = core.DEFAULT_FIELDS,
  params = undefined
) => {
  const u = `${url}?filters=${JSON.stringify(
    filters
  )}&page=${JSON.stringify(page)}&sort=${JSON.stringify(
    sort
  )}&fields=${JSON.stringify(fields)}&${core.buildParams(params)}`;

  const response = await fetch(u, {
    headers: core.getHeaders()
  });

  if (response.status === 200) {
    const res = await response.json();
    res.filters = filters;
    res.sort = sort;
    res.page = page;
    res.fields = fields;
    return res;
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await get(config, url, filters, sort, page, fields, params);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Update document in collection.
 * @function
 * @param {string} url - Url.
 * @param {Object} data - Data.
 * @param {string} id - Document id.
 * @param {Object=} params - Params.
 * @returns {Object} document.
 */
export const put = async (config, url, data, id, params = undefined) => {
  const u = `${url}/${id}?${core.buildParams(params)}`;
  const response = await fetch(u, {
    method: "PUT",
    headers: core.getHeaders(),
    body: JSON.stringify(data)
  });

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await put(config, url, data, id, params);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Insert document to collection.
 * @function
 * @param {string} url - Url.
 * @param {Object} data - Data.
 * @param {Object=} params - Params.
 * @returns {Object} document.
 */
export const post = async (config, url, data, params = undefined) => {
  const u = `${url}?${core.buildParams(params)}`;

  const response = await fetch(u, {
    method: "POST",
    headers: core.getHeaders(),
    body: JSON.stringify(data)
  });

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await post(config, url, data, params);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Get file.
 * @function
 * @param {string} url - Url.
 * @param {string} id - File id.
 * @param {boolean=} useCache - Use chache?
 * @param {Object=} params - Params.
 * @returns {Object} file (octet-stream).
 */
export const getFile = async (config, url, id, useCache = true, params = undefined) => {
  const u = `${url}/${id}?${core.buildParams(params)}`;

  if(useCache) {
    const cacheStorage = await caches.open('kd-cache');
    const cachedResponse = await cacheStorage.match(u);
    if(cachedResponse) {
      return await cachedResponse.blob();
    }
  }

  const response = await fetch(u, {
    method: "GET",
    headers: {
      Authorization: "Bearer " +core.getToken()
    }
  });

  if (response.status === 200) {
    if(useCache) {
      cacheStorage.put(u, response.clone());
    }
    return await response.blob();
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await getFile(config, url, id, useCache, params);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Delete document in collection.
 * @function
 * @param {string} url - Url.
 * @param {string} id - Document Id.
 * @param {Object=} params - Params.
 */
export const delById = async (config, url, id, params = undefined) => {
  const u = `${url}/${id}?${core.buildParams(params)}`;

  const response = await fetch(u, {
    method: "DELETE",
    headers: core.getHeaders()
  });

  if (response.status === 200) {
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    await delById(config, url, id, params);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Delete documents in collection.
 * @function
 * @param {string} url - Url.
 * @param {Object} filters - Filters.
 * @param {Object=} params - Params.
 */
export const del = async (config, url, filters, params = undefined) => {
  const u = `${url}?filters=${JSON.stringify(filters)}&${core.buildParams(params)}`;

  const response = await fetch(u, {
    method: "DELETE",
    headers: core.getHeaders()
  });

  if (response.status === 200) {
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await del(config, url, filters, params);
  } else {
    throw new Error(response.statusText);
  }
};