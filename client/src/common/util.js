export const get = (host, path, defaultValue) => {
  const value = path.reduce(
    (result, key) => (result && result[key] ? result[key] : undefined),
    host,
  );

  return value === undefined ? defaultValue : value;
};

export const getComponentDisplayName = Component =>
  Component.displayName || Component.name || 'Component';

export const isArray = value => Array.isArray(value);

export const noop = () => {};

export const omitBy = (obj, predicate) =>
  Object.entries(obj).reduce((result, [key, value]) => {
    if (!predicate(value, key)) {
      result[key] = value;
    }

    return result;
  }, {});

export const omit = (obj, keys) =>
  omitBy(obj, (value, key) => keys.includes(key));

export const uuid = a => {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
};

let currentId = 0;
export const uniqueId = (prefix = '') => `${prefix}${++currentId}`;
