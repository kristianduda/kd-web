/** @module store */

import * as core from "./core";
import * as storage from "./storage";
import * as ajax from "./ajax";

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
export const getFile = (config, id) => {
  const url = `${config.url.store}/api/file`;
  return ajax.getFile(config, url, id);
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
export const getById = (config, collection, id) => {
  const url = `${config.url.store}/api/store/${collection}`;
  return ajax.getById(config, url, id);
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
export const get = (
  config,
  collection,
  filters = core.DEFAULT_FILTERS,
  sort = core.DEFAULT_SORT,
  page = core.DEFAULT_PAGE,
  fields = core.DEFAULT_FIELDS
) => {
  const url = `${config.url.store}/api/store/${collection}`;
  return ajax.get(config, url, filters, sort, page, fields);
};

/**
 * Update document in collection.
 * @function
 * @param {string} collection - Collection.
 * @param {Object} data - Data.
 * @param {string} id - Document id.
 * @returns {Object} document.
 */
export const put = (config, collection, data, id) => {
  const url = `${config.url.store}/api/store/${collection}`;
  return ajax.put(config, url, data, id);
};

/**
 * Insert document to collection.
 * @function
 * @param {string} collection - Collection.
 * @param {Object} data - Data.
 * @returns {Object} document.
 */
export const post = (config, collection, data) => {
  const url = `${config.url.store}/api/store/${collection}`;
  return ajax.post(config, url, data);
};

/**
 * Delete document in collection.
 * @function
 * @param {string} collection - Collection.
 * @param {string} id - Document Id.
 */
export const delById = (config, collection, id) => {
  const url = `${config.url.store}/api/store/${collection}`;
  return ajax.delById(config, url, id);
};

/**
 * Delete documents in collection.
 * @function
 * @param {string} collection - Collection.
 * @param {Object} filters - Filters.
 */
export const del = (config, collection, filters) => {
  const url = `${config.url.store}/api/store/${collection}`;
  return ajax.del(config, url, filters);
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
