interface Input {
  value?: any;
  value1?: any;
  value2?: any;
  length?: number;
}

/**
 * Check for empty
 * @param {*} inputs
 * @returns {boolean}
 */
export function isEmpty({ value }: Input): boolean {
  return !value;
}

/**
 * Check for not empty
 * @param {*} inputs
 * @returns {boolean}
 */
export function isNotEmpty({ value }: Input): boolean {
  return !isEmpty({ value });
}

/**
 * Check equality
 * @param {*} inputs
 * @returns {boolean}
 */
export function isEqual({ value1, value2 }: Input): boolean {
  return value1 === value2;
}

/**
 * Check given string for equal length
 * @param {*} inputs
 * @returns {boolean}
 */
export function isLength({ value, length }: Input): boolean {
  return value.length === length;
}

/**
 * Check given string for minimum length
 * @param {*} inputs
 * @returns {boolean}
 */
export function isLengthMinimum({ value, length }: Input): boolean {
  return value.length >= length;
}

/**
 * Check given string for maximum length
 * @param {*} inputs
 * @returns {boolean}
 */
export function isLengthMaximum({ value, length }: Input): boolean {
  return value.length <= length;
}

/**
 * Check given string for valid email
 * @param {*} inputs
 * @returns {boolean}
 */
export function isValidEmail({ value }: Input): boolean {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}
