/** @module mail */

import * as ajax from "./ajax";

/**
 * Send mail.
 * @function
 * @param {Object} data - Data.
 */
export const send = (config, data) => {
  const url = `${config.url.mail}/api/mail`;
  return ajax.post(config, url, data);
};