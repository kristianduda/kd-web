/** @module storage */

const USER_KEY = 'kd-user';

const getItem = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
}

const setItem = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
}

const removeItem = (key) => {
  sessionStorage.removeItem(key);
}

/**
 * Get user from session storage.
 * @return {Object} User.
 */
export const getUser = () => {
  return getItem(USER_KEY);
}

/**
 * Set user to session storage.
 * @param {Object} user - User.
 */
export const setUser = (user) => {
  setItem(USER_KEY, user);
}

/**
 * Remove user from session storage.
 */
export const removeUser = () => {
  removeItem(USER_KEY);
}