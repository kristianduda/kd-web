/** @module ajax */

import * as core from "./core";
import * as storage from "./storage";

/**
 * Get document.
 * @function
 * @param {string} url - Url.
 * @param {string} id - Document id.
 * @returns {Object} document.
 */
export const getById = async (config, url, id) => {
  const u = `${url}/${id}`;

  const response = await fetch(u, {
    headers: core.getHeaders()
  });

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 404) {
    return null;
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await getById(config, url, id);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Get collection of documents that match a specified filter.
 * @function
 * @param {string} url - Url.
 * @param {Object=} filters - Filters.
 * @param {Object=} sort - Sort.
 * @param {Object=} page - Page.
 * @param {Object=} fields - Fields.
 * @returns {Object} collection of documents.
 */
export const get = async (
  config,
  url,
  filters = core.DEFAULT_FILTERS,
  sort = core.DEFAULT_SORT,
  page = core.DEFAULT_PAGE,
  fields = core.DEFAULT_FIELDS
) => {
  const u = `${url}?filters=${JSON.stringify(
    filters
  )}&page=${JSON.stringify(page)}&sort=${JSON.stringify(
    sort
  )}&fields=${JSON.stringify(fields)}`;

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
    return await get(config, url, filters, sort, page, fields);
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
 * @returns {Object} document.
 */
export const put = async (config, url, data, id) => {
  const u = `${url}/${id}`;
  const response = await fetch(u, {
    method: "PUT",
    headers: core.getHeaders(),
    body: JSON.stringify(data)
  });

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await put(config, url, data, id);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Insert document to collection.
 * @function
 * @param {string} url - Url.
 * @param {Object} data - Data.
 * @returns {Object} document.
 */
export const post = async (config, url, data) => {
  const u = `${url}`;

  const response = await fetch(u, {
    method: "POST",
    headers: core.getHeaders(),
    body: JSON.stringify(data)
  });

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await post(config, url, data);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Delete document in collection.
 * @function
 * @param {string} url - Url.
 * @param {string} id - Document Id.
 */
export const delById = async (config, url, id) => {
  const u = `${url}/${id}`;

  const response = await fetch(u, {
    method: "DELETE",
    headers: core.getHeaders()
  });

  if (response.status === 200) {
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    await delById(config, url, id);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Delete documents in collection.
 * @function
 * @param {string} url - Url.
 * @param {Object} filters - Filters.
 */
export const del = async (config, url, filters) => {
  const u = `${url}?filters=${JSON.stringify(filters)}`;

  const response = await fetch(u, {
    method: "DELETE",
    headers: core.getHeaders()
  });

  if (response.status === 200) {
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await del(config, url, filters);
  } else {
    throw new Error(response.statusText);
  }
};