import * as storage from "./storage";

export const DEFAULT_FILTERS = [];
export const DEFAULT_PAGE = { limit: 1000, skip: 0 };
export const DEFAULT_SORT = { field: "_id", dir: "asc" };
export const DEFAULT_FIELDS = [];

export const getHeaders = () => {
  var user = storage.getUser();

  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: user ? `Bearer  ${user.token}` : null
  };
};

export const refreshToken = async config => {
  const url = `${config.url.auth}/api/User/refresh`;
  const user = storage.getUser();
  const token = user ? user.refreshToken : config.key;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  if (response.status === 200) {
    const u = await response.json();
    u.refreshToken = token;
    storage.setUser(u);
    return true;
  } else {
    storage.removeUser();
    return false;
  }
};