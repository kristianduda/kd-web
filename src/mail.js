/** @module mail */

import * as ajax from "./ajax";
import * as core from "./core";

/**
 * Send mail.
 * @function
 * @param {Object} data - Data.
 */
export const send = (config, data) => {
  const url = `${config.url.mail}/api/mail`;
  return ajax.post(config, url, data);
};

/**
 * Mark as read.
 * @function
 * @param {string} id - id.
 */
export const read = (config, id) => {
  const url = `${config.url.mail}/api/mail/read?id=${id}`;
  return ajax.post(config, url, {});
}

/**
 * Get collection of mails that match a specified filter.
 * @function
 * @param {Array=} filters - Filters.
 * @param {Object=} sort - Sort.
 * @param {Object=} page - Page.
 * @returns {Object} collection of mails.
 */
export const get = async (
  config,
  filters = core.DEFAULT_FILTERS,
  sort = core.DEFAULT_SORT,
  page = core.DEFAULT_PAGE
) => {
  const url = `${config.url.mail}/api/mail`;
  return ajax.get(config, url, filters, sort, page);
}