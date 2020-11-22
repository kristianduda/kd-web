/** @module store */

import * as core from "./core";
import * as storage from "./storage";

/**
 * Insert file.
 * @function
 * @param {Object} file - File (formData).
 * @returns {Object} id.
 */
export const postFile = async (config, file) => {
  const url = `${config.url.store}/api/file`;

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + storage.getUser().token
    },
    body: formData
  });

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await postFile(config, file);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Get file.
 * @function
 * @param {string} id - File id.
 * @returns {Object} file (octet-stream).
 */
export const getFile = async (config, id) => {
  const url = `${config.url.store}/api/file/${id}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + storage.getUser().token
    }
  });

  if (response.status === 200) {
    return await response.blob();
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await getFile(config, id);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Delete file.
 * @function
 * @param {string} id - File id.
 */
export const delFile = async (config, id) => {
  const url = `${config.url.store}/api/file/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + storage.getUser().token
    }
  });

  if (response.status === 200) {
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    await delFile(config, id);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Get document.
 * @function
 * @param {string} collection - Collection.
 * @param {string} id - Document id.
 * @returns {Object} document.
 */
export const getById = async (config, collection, id) => {
  const url = `${config.url.store}/api/store/${collection}/${id}`;

  const response = await fetch(url, {
    headers: core.getHeaders()
  });

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 404) {
    return null;
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await getById(config, collection, id);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Get collection of documents that match a specified filter.
 * @function
 * @param {string} collection - Collection.
 * @param {Object=} filters - Filters.
 * @param {Object=} sort - Sort.
 * @param {Object=} page - Page.
 * @param {Object=} fields - Fields.
 * @returns {Object} collection of documents.
 */
export const get = async (
  config,
  collection,
  filters = core.DEFAULT_FILTERS,
  sort = core.DEFAULT_SORT,
  page = core.DEFAULT_PAGE,
  fields = core.DEFAULT_FIELDS
) => {
  const url = `${
    config.url.store
  }/api/store/${collection}?filters=${JSON.stringify(
    filters
  )}&page=${JSON.stringify(page)}&sort=${JSON.stringify(
    sort
  )}&fields=${JSON.stringify(fields)}`;

  const response = await fetch(url, {
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
    return await get(config, collection, filters, sort, page, fields);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Update document in collection.
 * @function
 * @param {string} collection - Collection.
 * @param {Object} data - Data.
 * @param {string} id - Document id.
 * @returns {Object} document.
 */
export const put = async (config, collection, data, id) => {
  const url = `${config.url.store}/api/store/${collection}/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: core.getHeaders(),
    body: JSON.stringify(data)
  });

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await put(config, collection, data, id);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Insert document to collection.
 * @function
 * @param {string} collection - Collection.
 * @param {Object} data - Data.
 * @returns {Object} document.
 */
export const post = async (config, collection, data) => {
  const url = `${config.url.store}/api/store/${collection}`;

  const response = await fetch(url, {
    method: "POST",
    headers: core.getHeaders(),
    body: JSON.stringify(data)
  });

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await post(config, collection, data);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Delete document in collection.
 * @function
 * @param {string} collection - Collection.
 * @param {string} id - Document Id.
 */
export const delById = async (config, collection, id) => {
  const url = `${config.url.store}/api/store/${collection}/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: core.getHeaders()
  });

  if (response.status === 200) {
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    await delById(config, collection, id);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Delete documents in collection.
 * @function
 * @param {string} collection - Collection.
 * @param {Object} filters - Filters.
 */
export const del = async (config, collection, filters) => {
  const url = `${
    config.url.store
  }/api/store/${collection}?filters=${JSON.stringify(filters)}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: core.getHeaders()
  });

  if (response.status === 200) {
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await del(config, collection, filters);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Get computed results of a specified aggregation.
 * @function
 * @param {Object} config - Config.
 * @param {string} collection - Collection.
 * @param {Object} group - Group.
 * @param {Object=} filters - Filters.
 * @param {Object=} sort - Sort.
 * @param {Object=} page - Page.
 * @returns {Object} computed results of a specified aggregation.
 */
export const aggregation = async (
  config,
  collection,
  group,
  filters = core.DEFAULT_FILTERS,
  sort = core.DEFAULT_SORT,
  page = core.DEFAULT_PAGE
) => {
  const url = `${
    config.url.store
  }/api/store/${collection}/aggregation?group=${JSON.stringify(
    group
  )}&filters=${JSON.stringify(filters)}&sort=${JSON.stringify(
    sort
  )}&page=${JSON.stringify(page)}`;

  const response = await fetch(url, {
    headers: core.getHeaders()
  });

  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401 && (await core.refreshToken(config))) {
    return await aggregation(config, collection, group, filters, sort);
  } else {
    throw new Error(response.statusText);
  }
};

/**
 * Get location.
 * @function
 * @returns {Object} location.
 */
export const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const p = {
            type: "Point",
            coordinates: [position.coords.latitude, position.coords.longitude]
          };
          resolve(p);
        },
        error => {
          let msg;
          switch (error.code) {
            case error.PERMISSION_DENIED:
              msg = "User denied the request for Geolocation.";
              break;
            case error.POSITION_UNAVAILABLE:
              msg = "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              msg = "The request to get user location timed out.";
              break;
            case error.UNKNOWN_ERROR:
            default:
              msg = "An unknown error occurred.";
              break;
          }
          reject(new Error(msg));
        }
      );
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
};
