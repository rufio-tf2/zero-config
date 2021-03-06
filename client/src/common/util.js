export const get = (host, path, defaultValue) => {
  const value = path.reduce(
    (result, key) => (result && result[key] ? result[key] : undefined),
    host,
  );

  return value === undefined ? defaultValue : value;
};

export const getComponentDisplayName = Component =>
  Component.displayName || Component.name || 'Component';

export const groupBy = (list, getKey) => {
  return list.reduce((accumulator, item) => {
    const key = getKey(item);
    const group = accumulator[key] || [];

    accumulator[key] = [...group, item];

    return accumulator;
  }, {});
};

export const keyBy = (list, key) =>
  list.reduce((result, item) => {
    result[item[key]] = item;

    return result;
  }, {});

export const identity = value => value;

export const isArray = value => Array.isArray(value);

export const isObject = value => !isNull(value) && typeof value === 'object';

export const isString = value => typeof value === 'string';

export const isEmpty = value =>
  isNil(value) ||
  (isString(value) && value === '') ||
  (isArray(value) && value.length === 0) ||
  (isObject(value) && Object.keys(value).length === 0);

export const isSystemProp = propName => MUI_SYSTEM_PROPS.includes(propName);

export const isUndefined = value => value === undefined;

export const isNull = value => value === null;

export const isNil = value => isUndefined(value) || isNull(value);

export const negate = f => (...args) => !f(...args);

export const isNonNil = negate(isNil);

export const mapValues = (obj, iteratee = identity) => {
  const keys = Object.keys(obj);

  return keys.reduce((accumulator, key) => {
    const value = obj[key];

    accumulator[key] = iteratee(value, key, obj);

    return accumulator;
  }, {});
};

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

export const partitionObject = (obj, predicate) =>
  Object.entries(obj).reduce(
    (result, [key, value]) => {
      result[predicate(key, value) ? 0 : 1][key] = value;

      return result;
    },
    [{}, {}],
  );

export const stubTrue = () => true;

export const uuid = a => {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
};

let currentId = 0;
export const uniqueId = (prefix = '') => `${prefix}${++currentId}`;

const MUI_SYSTEM_PROPS = [
  'border',
  'borderBottom',
  'borderColor',
  'borderLeft',
  'borderRadius',
  'borderRight',
  'borderTop',
  'boxShadow',
  'displayPrint',
  'display',
  'alignContent',
  'alignItems',
  'alignSelf',
  'flex',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'justifyContent',
  'order',
  'overflow',
  'overflowX',
  'overflowY',
  'bgcolor',
  'color',
  'bottom',
  'left',
  'position',
  'right',
  'top',
  'zIndex',
  'height',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'width',
  'm',
  'mb',
  'ml',
  'mr',
  'mt',
  'mx',
  'my',
  'p',
  'pb',
  'pl',
  'pr',
  'pt',
  'px',
  'py',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'textAlign',
];
